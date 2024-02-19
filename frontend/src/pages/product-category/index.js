import React from "react";
import axios from "axios";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import Breadcrumb from "@/components/common/Breadcrumb";
import Categories from "@/components/product/Categories";

const index = ({ categories }) => {
  return (
    <>
      <NextSeo
        title="Fishing Shirts Categories"
        titleTemplate="%s | Fishing Shirts Now"
        description="Discover a variety of elegant high performance fishing shirts in different fabric and styles, vivid graphics with high visibility."
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com/product-category",
          },
          {
            property: "article:modified_time",
            content: "2021-05-11T22:07:14+00:00",
          },
        ]}
        openGraph={{
          type: "article",
          title: "Fishing Shirts Categories | Fishing Shirts Now",
          description:
            "Discover a variety of elegant high performance fishing shirts in different fabric and styles, vivid graphics with high visibility.",
          url: "https://fishingshirtsnow.com/product-category",
          images: [
            {
              url: "https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg",
              width: 1280,
              height: 853,
              alt: "fisherman with fishing rod looking at the sea",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          title: "Fishing Shirts Categories | Fishing Shirts Now",
          description:
            "Discover a variety of elegant high performance fishing shirts in different fabric and styles, vivid graphics with high visibility.",
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://fishingshirtsnow.com",
          },
          {
            position: 2,
            name: "Store",
            item: "https://fishingshirtsnow.com/product-category",
          },
        ]}
      />
      <WebPageJsonLd
        name="Fishing Shirts Categories | Fishing Shirts Now"
        description="Discover a variety of elegant high performance fishing shirts in different fabric and styles, vivid graphics with high visibility."
        id="https://fishingshirtsnow.com/product-category/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section className="container mx-auto relative p-5">
        <div className="mt-5">
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {categories?.map((category, index) => (
            <Categories key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );

  return {
    props: { categories },
  };
}
