import React from "react"
import products from "../../products"
import axios from "axios"

const product = ({product}) => {
  return (
    <div>{product.name}</div>
  )
}

export default product

export async function getStaticPaths() {
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
  
  const paths=data.map(product=>{
    return{ params: { productId: product._id } }
    })

    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps(context) {
  const { params } = context;
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
  const product = data.find((product) => product._id === params.productId);

  return {
    props: {
      product,
    },
  };
}