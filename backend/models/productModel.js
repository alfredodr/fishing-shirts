
import mongoose from "mongoose";

const reviewSchema=mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
},{
    timestamps:true
});

const productSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    asin:{
      type:String,
      required:true
    },
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    images:[
        {
            src:{type:String, required:true},
            alt:{type:String, required:true},
        }
    ],
    description:{
      type: [String],
      required: true
    },
    brand:{
        type:String,
        required:true,
    },
    categories: [
      {
       name:{ type:String, required:true, ref:"Category"}
      }
    ],
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[reviewSchema],
},{
    timestamps:true
});

//update the product count per category after inserting one product
productSchema.post("save", async (doc, next) => {
  try {
    const categoryCounts = [];
    let categoryName="";

    const categories = doc.categories; // get the categories from the saved document
    categories.forEach((category) => {
      categoryName = category.name;
      categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
    });

    for (const categoryName in categoryCounts) {
      const category = await mongoose.model("Category").findOne({ name: categoryName });
      if (category) {
        await mongoose.model("Category").updateOne({ name: categoryName }, { count: categoryCounts[categoryName] });
      }
    }
    next();
  } catch (error) {
    console.error("Error updating category counts:", error);
    next(error);
  }
});

//update the product count per category after inserting many products
productSchema.post("insertMany", async (docs, next)=> {
  try {
    const categoryCounts = [];
    let categoryName="";
    
    docs.forEach((doc) => {
      const categories = doc.categories; //loop through each category inside of each document
      categories.forEach((categories) => {
        categoryName = categories.name;//get the cateegory name
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;//count the number of products in each category
      })
    });

    //loops through the categoryCounts in each Category and updates the corresponding category
    for (const categoryName in categoryCounts) {
        const category = await mongoose.model("Category").findOne({ name: categoryName });
        if (category) {
          await mongoose.model("Category").updateOne({ name: categoryName }, { count: categoryCounts[categoryName] });
        }
    }
    next()
  } catch (error) {
    console.error("Error updating category counts:", error);
    next(error)
  }
});  


const Product=mongoose.model("Product", productSchema)

export default Product;
