
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

// const categorySchema=mongoose.Schema({
//         name:{type:String, required:true},
//         slug:{type:String, required:true},
//         image:{
//             src:{type:String, required:true},
//             alt:{type:String, required:true}
//         },
//         products:[
//             {
//                 type:mongoose.Schema.Types.ObjectId,
//                 requred:true,
//                 ref:"Product"
//             }
//         ]
// },{
//     timestamps:true
// });

const productSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
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
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
            type:String,
            required:true,
            ref:"Category"
    },
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

productSchema.post("save", async (doc, next)=> {
    try {
      const category = await mongoose.model("Category").findOne({ name: doc.category });
      if (!category) {
        await mongoose.model("Category").create({ name: doc.category, count: 1 });
      } else {
        await mongoose.model("Category").updateOne({ name: doc.category }, { $inc: { count: 1 } });
      }
      next();
    } catch (error) {
      console.error('Error updating category count:', error);
      next(error);
    }
  });

productSchema.post("insertMany", async (docs, next)=> {
    try {
      const categoryCounts = {};
      
      docs.forEach((doc) => {
        const categoryName = doc.category; //loop through each document to determine its category 
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;//count the number of products in each category
      });
  
      //loops through the categoryCounts in each Category and updates the corresponding category
      for (const categoryName in categoryCounts) {
        const category = await mongoose.model("Category").findOne({ name: categoryName });
        if (!category) {
          await mongoose.model("Category").create({ name: categoryName, count: categoryCounts[categoryName] });
        } else {
          await mongoose.model("Category").updateOne({ name: categoryName }, { $inc: { count: categoryCounts[categoryName] } });
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