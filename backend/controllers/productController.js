import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route  GET /api/products
// @access Public
const getProducts=asyncHandler(async(req,res)=>{
  //pagination
  const pageSize=10;
  const page=Number(req.query.pageNumber) || 1;

  //search
    const keyword=req.query.keyword ? {
      name:{
        $regex: req.query.keyword,
        $options:"i"
      }
    } : {}

    const count=await Product.countDocuments(keyword);

    const products=await Product.find({...keyword}).limit(pageSize).skip(pageSize*(page-1));

    const pages=Math.ceil(count/pageSize);

    if(products){
        res.json({products, page, pages: Math.ceil(count/pageSize)})
      }else{
        res.status(404)
        throw new Error("Product not found")
      }
})

// @desc Fetch single product
// @route  GET /api/products/:id
// @access Public
const getProductById=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    
    if(product){
      res.json(product)
    }else{
      res.status(404)
      throw new Error("Product not found")
    }
})

export {
    getProducts,
    getProductById
}










