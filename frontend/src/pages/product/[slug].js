import React from "react";
import axios from "axios";
import ProductDetail from "@/components/product/ProductDetail";

const product = ({ product }) => {
  return <ProductDetail product={product} />;
};

export default product;

export async function getStaticPaths() {
  const pageSize = 1000;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/all?pageSize=${pageSize}`
  );

  const paths = data?.products?.map((product) => {
    return { params: { slug: product.slug } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { data: product } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${params.slug}`
  );

  return {
    props: {
      product,
    },
  };
}
