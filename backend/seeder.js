import mongoose from "mongoose";
import * as dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js"
import users from "./data/users.js";
import products from "./data/products.js";
import categories from "./data/categories.js"
import User from "./models/userModel.js";
import Product from "./models/ProductModel.js"; 
import Category from "./models/categoryModel.js";

dotenv.config()

connectDB();

const importData=async()=>{
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Category.deleteMany();

        let createdCategories=await Category.insertMany(categories);

        let randomCategory=()=>{
            let result = null;
           let neededCategories=1; 
            for (let i = 0; i < neededCategories; i++) {
                result=(createdCategories[Math.floor(Math.random()*createdCategories.length)].name);
            }
            return result;
        }

        const createdUser=await User.insertMany(users);

        const adminUser=createdUser[0]._id;

        const sampleProducts=products.map(product=>{
            return {...product, user:adminUser, category:randomCategory()}
        });

        await Product.insertMany(sampleProducts);

        console.log("Data Imported!".green.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData=async()=>{
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Category.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.lerror(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2]==="-d"){
    destroyData()
}else{
    importData()
}













