import React from "react"
import axios from "axios"
import ProductDetail from "@/components/product/ProductDetail"

const product = ({product}) => {
  return (
    <ProductDetail product={product}/>
  )
}

export default product

export async function getStaticPaths() {
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
  
  const paths=data.map(product=>{
    return{ params: { slug: product.slug } }
    })

    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps(context) {
  const { params } = context;
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
  const product = data.find((product) => product.slug === params.slug);

  return {
    props: {
      product,
    },
    revalidate:10
  };
}