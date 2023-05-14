import React, { useState } from "react";
import axios from "axios";
import Categories from "@/components/product/Categories";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";
import Head from "next/head";

const store = ({ products, page, pages, keyword, categories }) => {
  const initialMin = 0;
  const initialMax = 100;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  return (
    <>
      <Head>
        <title>
          Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight
        </title>
        <meta
          name="description"
          content="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        />
        <link rel="canonical" href="https://fishingshirtsnow.com/store/" />
        <link rel="next" href="https://fishingshirtsnow.com/store/page/2/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight"
        />
        <meta
          property="og:description"
          content="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        />
        <meta property="og:url" content="https://fishingshirtsnow.com/store/" />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2021-05-11T22:07:14+00:00"
        />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="853" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
      </Head>
      <section
        id="features"
        className="flex flex-col-reverse md:flex-row lg:flex-row justify-center container mx-auto my-24 relative"
      >
        <div className="md:w-1/5 mx-5 md:border md:border-r-1 md:border-l-transparent md:border-t-transparent md:border-b-transparent md:border-opacity-25 md:border-textLightGray md:pr-16 md:mr-16">
          <FilterByPrice
            min={0}
            max={100}
            step={1}
            initialMin={initialMin}
            initialMax={initialMax}
            priceCap={10}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <div className="mt-5">
            <h2>SPONSOR:</h2>
            <iframe
              src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ez&f=ifr&linkID=10630a4648facad5e2cb15e825f69694&t=fishing-shirts-now00-20&tracking_id=fishing-shirts-now00-20"
              width="160"
              height="600"
              border="0"
              rel="nofollow"
            ></iframe>
          </div>
        </div>
        <div className="w-4/5">
          <p>
            Welcome to our fishing shirts store where you will find a huge
            variety of elegant high performance options. Take a look around and
            you will find different fabric and styles, vivid graphics with high
            visibility, which is important out there in the sea. Looking for sun
            protective clothing? We have you covered, our long sleeve collection
            has the highest rated picks chosen by our clients. We are constantly
            updating our catalog following your feedback, to keep only the best
            shirts in the market right now. Navigate our store to find the best
            sellers or browse by categories: men, women, kids, fun collection,
            and even shop by brand: Hanes, Columbia, Koofin and more. Finally
            don’t forget to leave your feedback, we are always open to any
            suggestions to improve our content to make it more valuable for you.
          </p>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10">
            {/* Categories */}
            {categories?.map((category, index) => (
              <Categories key={index} category={category} />
            ))}
          </div>
          <div className="flex items-center justify-center container mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-32">
              {/* Product */}
              {products
                .filter((product) => {
                  return product.price >= minPrice && product.price <= maxPrice;
                })
                .map((product, index) => {
                  return (
                    <StoreProducts
                      key={index}
                      product={product}
                      keyword={keyword ? keyword : ""}
                    />
                  );
                })}
            </div>
          </div>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </section>
    </>
  );
};

export default store;

export async function getServerSideProps(context) {
  const { query } = context;
  const keyword = query.s || "";
  const pageNumber = query.pageNumber || 1;
  const { data: allProducts } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
  );
  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );
  const { products, page, pages } = allProducts;

  return {
    props: { products, page, pages, keyword, categories },
  };
}
