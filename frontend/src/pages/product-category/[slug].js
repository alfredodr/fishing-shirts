import React from "react"
import axios from "axios"


const product = ({category}) => {
  return (
    <h1>{category.slug}</h1>
  )
}

export default product

export async function getStaticPaths() {
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);
  
  const paths=data.map(category=>{
    return{ params: { slug: category.slug } }
    })

    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps(context) {
  const { params } = context;
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);
  const category = data.find((category) => category.slug === params.slug);

  return {
    props: {
      category,
    },
    revalidate:10
  };
}