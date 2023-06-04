import * as dotenv from "dotenv";
import connectDB from "../config/db.js";
import mongoose from "mongoose";
import colors from "colors";
import amazonPaapi from "amazon-paapi";
import productDetails from "../data/productDetails.js";
import users from "../data/users.js";
import categories from "../data/categories.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

dotenv.config();

connectDB();

let count = 0;
let productData;
let index = 0;
let asinArray = [];
let allAsins = [];
let missingIds = [];
let amazonProductSpecificInfo = [];
let result = [];

const commonParameters = {
  AccessKey: process.env.ACCESS_KEY,
  SecretKey: process.env.SECRET_KEY,
  PartnerTag: process.env.PARTNER_TAG,
  PartnerType: process.env.PARTNER_TYPE,
  Marketplace: "www.amazon.com",
};

for (let i = 0; i < productDetails.length; i++) {
  allAsins.push(productDetails[i].asin);
}

//check if products already exist in the database
const findExistingProducts = async () => {
  try {
    //await Product.deleteMany();
    count = await Product.countDocuments({});

    if (count === 0) {
      console.log("Product database is empty");
      return count;
    } else {
      const existingDocuments = await Product.find(
        { _id: { $in: allAsins } },
        { _id: 1 }
      );

      const existingIds = existingDocuments.map((doc) => doc._id.toString());
      missingIds = allAsins.filter((id) => !existingIds.includes(id));
    }

    return missingIds;
  } catch (error) {
    console.error(`Error finding missines asins due to: ${error}`.red.inverse);
    process.exit(1);
  }
};

await findExistingProducts();

//get all 10 by 10 ASINs every 5 seconds, get the amazon data for each pair of 10 products, clean the data and save it to the products file
const getAsins = async () => {
  asinArray = [];

  if (count === 0) {
    productData = productDetails;
  } else if (missingIds.length > 0) {
    productData = missingIds;
  } else if (missingIds.length <= 0) {
    console.log("All product are in the database");
    process.exit(1);
  }

  //add asins from existing products in pairs of 10 to an asinArray, every 5 seconds
  for (let i = 0; i < 10; i++) {
    if (index === productData.length) {
      clearInterval(intervalId);
      console.log(`${result?.length}===${productData.length}`);
      if (result?.length === productData.length) {
        //save clean data in json and make the JSON file more easy to read
        try {
          const importData = async (products) => {
            try {
              // await User.deleteMany();
              // await Category.deleteMany();

              //use only when adding initial user data
              // const createdUser = await User.insertMany(users);
              // const adminUser = createdUser[0]._id;

              const findAdmin = await User.findOne({
                email: "admin@example.com",
              });
              const adminUser = findAdmin._id;

              // //use only when adding initial category data
              // const allCategories = categories.map((category) => {
              //   return { ...category, user: adminUser };
              // });

              // await Category.insertMany(allCategories);

              const allProducts = products.map((product) => {
                return { ...product, user: adminUser };
              });

              // Create an instance of the model
              const instance = new Product();

              // Set values for the instance
              instance.data = allProducts;

              // Validate each element of the array
              for (const data of instance.data) {
                const subInstance = new Product(data);

                const validationError = subInstance.validateSync();

                if (validationError) {
                  console.error("Validation error:", validationError.errors);
                  process.exit();
                }
              }

              await Product.insertMany(allProducts);

              console.log("Data Imported!".green.inverse);
              process.exit();
            } catch (error) {
              console.error(`${error}`.red.inverse);
              process.exit(1);
            }
          };
          importData(result);
        } catch (error) {
          console.log("Unable to add clean data to file due to:", error);
        }
      }
      break;
    }

    if (missingIds <= 0) {
      asinArray.push(productData[index].asin);
    } else {
      //add the missing Asins to the array
      asinArray.push(productData[index]);
    }
    index++;
  }

  if (asinArray.length > 0) {
    //console.log(asinArray);
    onAsinChange(asinArray);
  }
};

const intervalId = setInterval(getAsins, 5000);

//get each 10 products
const onAsinChange = (asinArray) => {
  let requestParameters = {
    ItemIds: asinArray,
    ItemIdType: "ASIN",
    Condition: "New",
    Resources: [
      "ItemInfo.Title",
      "Images.Primary.Large",
      "Images.Variants.Large",
      "Offers.Listings.Price",
      "Offers.Listings.Availability.Type",
      "Offers.Listings.MerchantInfo",
      "ItemInfo.Features",
      "ItemInfo.ProductInfo",
      "ItemInfo.ByLineInfo",
      "ItemInfo.TechnicalInfo",
    ],
  };

  amazonPaapi
    .GetItems(commonParameters, requestParameters)
    .then((data) => {
      // add new products to the Items array
      amazonProductSpecificInfo.push(data);
      cleanData(asinArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

const cleanData = (asinArray) => {
  // // Process the current 10 ASINs here...
  console.log(`Processing ASINs: ${asinArray}`);

  //put all products in one Items array
  const flattenedAmazonProductSpecificInfo = amazonProductSpecificInfo.flatMap(
    (obj) => obj.ItemsResult.Items
  );
  const groupedAmazonProductSpecificInfo = {
    ItemsResult: { Items: flattenedAmazonProductSpecificInfo },
  };
  let items = groupedAmazonProductSpecificInfo.ItemsResult.Items;

  //check for missing data and save in a specific format
  result = items?.map((item) => {
    const asin = item?.ASIN;
    console.log("asin:", asin); //check if these products match the asinArray products
    const detailPageUrl = item?.DetailPageURL;
    const primaryImageUrl = item?.Images?.Primary?.Large?.URL;
    const title = item?.ItemInfo?.Title?.DisplayValue;
    const imageVariants =
      item?.Images?.Variants?.map((variant) => {
        return {
          src: variant?.Large?.URL,
          alt: title,
        };
      }) || [];
    const featureDisplayValues = item?.ItemInfo?.Features?.DisplayValues;
    const priceAmount = item?.Offers?.Listings[0]?.Price?.Amount || 1;
    const productBrand = item?.ItemInfo?.ByLineInfo?.Brand?.DisplayValue;
    const getSlug = (asin) => {
      const product = productDetails?.find((product) => product?.asin === asin);
      return product ? product?.slug : "404";
    };
    const getCategories = (asin) => {
      const product = productDetails?.find((product) => product?.asin === asin);
      return product ? product?.categories : "";
    };
    return {
      _id: asin,
      name: title,
      categories: getCategories(asin),
      slug: getSlug(asin),
      externalUrl: detailPageUrl,
      images: [
        {
          src: primaryImageUrl,
          alt: title,
        },
        ...imageVariants,
      ],
      description: featureDisplayValues,
      brand: productBrand,
      price: priceAmount,
    };
  });
};

getAsins();

export default getAsins;
