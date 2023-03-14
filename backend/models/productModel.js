
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
    categories:[
        {
            name:{type:String, required:true},
            slug:{type:String, required:true},

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

const Product=mongoose.model("Product", productSchema)

export default Product;