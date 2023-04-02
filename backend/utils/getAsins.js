import * as dotenv from "dotenv";
import connectDB from "../config/db.js";
import mongoose from "mongoose";
import colors from "colors";
import cron from "node-cron";
import amazonPaapi from "amazon-paapi";
import productDetails from "./productDetails.js";
import users from "../data/users.js";
import categories from "../data/categories.js";
import User from "../models/userModel.js";
import Product from "../models/ProductModel.js";
import Category from "../models/categoryModel.js";

dotenv.config();

connectDB();

let index = 0;
const asinArray = [];
let currentAsins=[];
let amazonProductSpecificInfo=[];
let asinCount=0;
let result=[];

const commonParameters = {
  AccessKey: process.env.ACCESS_KEY,
  SecretKey: process.env.SECRET_KEY,
  PartnerTag: process.env.PARTNER_TAG, 
  PartnerType: process.env.PARTNER_TYPE, 
  Marketplace: "www.amazon.com", 
};

// update products once a month on the 1st day at 12:00am
cron.schedule('0 0 1 * *', () => {
  getAsins()
}, {
  scheduled: true,
  timezone: "America/New_York"
});

//get all 10 by 10 ASINs every 5 seconds, get the amazon data for each pair 10 products, clean data, then clean the data and save it to the products file  
const getAsins=()=> {
  for (let i = 0; i < 10; i++) {
    if (index >= productDetails.length) {
      clearInterval(intervalId);    

      if(result.length===productDetails.length){
        // //save clean data in json and make the JSON file more easy to read  
        try {         
          const importData=async(products)=>{
            try {
                await Product.deleteMany();
                await User.deleteMany();
                await Category.deleteMany();
        
                const createdUser=await User.insertMany(users);
        
                const adminUser=createdUser[0]._id;
        
                const allCategories=categories.map(category=>{
                    return {...category, user:adminUser}
                });
        
                const allProducts=products.map(product=>{
                    return {...product, user:adminUser}
                });
        
                await Category.insertMany(allCategories);
        
                await Product.insertMany(allProducts);
        
                console.log("Data Imported!".green.inverse);
                process.exit()
            } catch (error) {
                console.error(`${error}`.red.inverse);
                process.exit(1);
            }
          }
          importData(result);
        } catch (error) {
          console.log("Unable to add clean data to file due to:", error)
        }
      }

      break;
    }
    asinArray.push(productDetails[index].asin);
    index++;
  }
  
  if (asinArray.length > 0) {
    processAsins();
  }  
}

//get the data for each pair of 10 ASINs and add it to the file
const processAsins=()=> {
  currentAsins.splice(0, currentAsins.length, ...asinArray.slice(0, 10));

  onAsinChange(currentAsins);
}

const intervalId = setInterval(getAsins, 5000);

//get each 10 products
const onAsinChange=(currentAsins)=> {
  let requestParameters = {
    ItemIds: currentAsins,
    ItemIdType: "ASIN",
    Condition: "New",
    Resources: [
      "ItemInfo.Title",
      "Images.Primary.Large",
      "Images.Variants.Medium",
      "Offers.Listings.Price",
      "Offers.Listings.Availability.Type",
      "Offers.Listings.MerchantInfo",	
      "CustomerReviews.StarRating",
      "BrowseNodeInfo.BrowseNodes.SalesRank",
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
    amazonProductSpecificInfo.push(data)
    cleanData()})
  .catch((error) => {
    console.log(error)
  });
}

const cleanData=()=>{
  // // Process the current 10 ASINs here...
  console.log(`Processing ASINs: ${currentAsins}`);

  asinCount+=currentAsins.length;

  //put all products in one Items array
  const flattenedAmazonProductSpecificInfo = amazonProductSpecificInfo.flatMap(obj => obj.ItemsResult.Items);
  const groupedAmazonProductSpecificInfo = {ItemsResult: {Items: flattenedAmazonProductSpecificInfo}};
  let items = groupedAmazonProductSpecificInfo.ItemsResult.Items;
  

  //check for missing data and save in a specific format
  result = items?.map(item => {
    const asin = item?.ASIN || "";
    const detailPageUrl = item?.DetailPageURL || "";
    const primaryImageUrl = item?.Images?.Primary?.Large?.URL  || "";
    const title = item?.ItemInfo?.Title?.DisplayValue || "";
    const imageVariants = item?.Images?.Variants?.map(variant => {
     return {
      "src":variant?.Medium?.URL  || "",
      "alt":title  || ""
     } 
    }) || [];
    const featureDisplayValues = item?.ItemInfo?.Features?.DisplayValues || "";
    const priceAmount = item?.Offers?.Listings[0]?.Price?.Amount || 1;//item.Offers.Listings[0].Price.Amount;
    const productRating=item?.Offers?.Listings[0]?.MerchantInfo?.FeedbackRating || 0;
    const productReviewCount=item?.Offers?.Listings[0]?.MerchantInfo?.FeedbackCount || 0;
    const productBrand=item?.ItemInfo?.ByLineInfo?.Brand?.DisplayValue || "";
    const getSlug=(asin)=>{
      const product = productDetails?.find(product => product?.asin === asin);
      return product ? product?.slug : "404";
    }
    const getCategories=(asin)=>{
      const product = productDetails?.find(product => product?.asin === asin);
      return product ? product?.categories : "";
    }
    return {
      asin,
      name: title,
      categories:getCategories(asin),
      slug: getSlug(asin),
      external_url: detailPageUrl,
      images: [
        {
          src: primaryImageUrl,
          alt: title,
        },
        ...imageVariants 
      ],
      description: featureDisplayValues,
      brand: productBrand,
      price: priceAmount,
      countInStock: 10,
      rating: productRating,
      numReviews: productReviewCount,
    }
  }); 

  // remove the ASINs that have been processed from the array
  asinArray.splice(0, currentAsins.length);
}

export default getAsins;