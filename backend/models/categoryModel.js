import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
    name:{type:String, required:true},
    slug:{type:String, required:true},
    image:{
        src:{type:String, required:true},
        alt:{type:String, required:true}
    },
    count:{
        type:Number,
        Required:true,
        default:0
    }
},{
timestamps:true
});

const Category=mongoose.model("Category", categorySchema);

export default Category;

