import * as dotenv from "dotenv";
import connectDB from "../config/db.js";
import mongoose from "mongoose";
import colors from "colors";
import amazonPaapi from "amazon-paapi";
import products from "../data/products.js";
import users from "../data/users.js";
import categories from "../data/categories.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

dotenv.config();

connectDB();

let index = 0;
const asinArray = [];
let currentAsins = [];
let amazonProductSpecificInfo = [];
let result = [];

const commonParameters = {
  AccessKey: process.env.ACCESS_KEY,
  SecretKey: process.env.SECRET_KEY,
  PartnerTag: process.env.PARTNER_TAG,
  PartnerType: process.env.PARTNER_TYPE,
  Marketplace: "www.amazon.com",
};

//get all 10 by 10 ASINs every 5 seconds, get the amazon data for each pair of 10 products, clean the data and save it to the products file
const importData = async () => {
  for (let i = 0; i < 10; i++) {
    if (index === products.length) {
      clearInterval(intervalId);

      try {
        await User.deleteMany();
        await Category.deleteMany();
        await Product.deleteMany();

        const createdUser = await User.insertMany(users);

        const adminUser = createdUser[0]._id;

        const allCategories = categories.map((category) => {
          return { ...category, user: adminUser };
        });

        const allProducts = result.map((product) => {
          return { ...product, user: adminUser };
        });

        await Category.insertMany(allCategories);

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
        console.error(
          `Unable to add clean data to file due to:${error}`.red.inverse
        );
        process.exit(1);
      }
    }
    asinArray.push(products[index].asin);
    index++;
  }

  if (asinArray.length > 0) {
    processAsins();
  }
};

//get the data for each pair of 10 ASINs and add it to the file
const processAsins = () => {
  currentAsins.splice(0, currentAsins.length, ...asinArray.slice(0, 10));

  onAsinChange(currentAsins);
};

const intervalId = setInterval(importData, 5000);

//get each 10 products
const onAsinChange = (currentAsins) => {
  let requestParameters = {
    ItemIds: currentAsins,
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
      cleanData();
    })
    .catch((error) => {
      console.log(error);
    });
};

const cleanData = () => {
  // Process the current 10 ASINs here...
  console.log(`Processing ASINs: ${currentAsins}`);

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
    const detailPageUrl = item?.DetailPageURL;
    const primaryImageUrl = item?.Images?.Primary?.Large?.URL;
    const title = item?.ItemInfo?.Title?.DisplayValue || "";
    const imageVariants =
      item?.Images?.Variants?.map((variant) => {
        return {
          src: variant?.Large?.URL,
          alt: title,
        };
      }) || [];
    const featureDisplayValues = item?.ItemInfo?.Features?.DisplayValues || "";
    const priceAmount = item?.Offers?.Listings[0]?.Price?.Amount || 1;
    const productBrand = item?.ItemInfo?.ByLineInfo?.Brand?.DisplayValue || "";
    const getSlug = (asin) => {
      const product = products?.find((product) => product?.asin === asin);
      return product ? product?.slug : "404";
    };
    const getCategories = (asin) => {
      const product = products?.find((product) => product?.asin === asin);
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

  // remove the ASINs that have been processed from the array
  asinArray.splice(0, currentAsins.length);
};

importData();

export default importData;
