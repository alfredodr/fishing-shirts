import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "@/components/product/Categories";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";
import { NextSeo, WebPageJsonLd } from "next-seo";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

const Store = ({ products, categories }) => {
  const initialMin = 0;
  const initialMax = 200;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [sortBy, setSortBy] = useState("");

  const [data, setData] = useState(products);
  const router = useRouter();
  const { query } = router;
  const keyword = query?.s || "";
  const pageNumber = query?.page || 1;
  const { asPath } = router;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: allProducts } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}`
        );

        setData(allProducts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [keyword, pageNumber, sortBy]);

  return (
    <>
      <NextSeo
        title="Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight"
        titleTemplate="%s | Fishing Shirts Now"
        description="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        next={`https://fishingshirtsnow.com/store?page=${pageNumber + 1}`}
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com/store",
          },
          {
            property: "article:modified_time",
            content: "2021-05-11T22:07:14+00:00",
          },
        ]}
        openGraph={{
          type: "article",
          title:
            "Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight",
          description:
            "Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you.",
          url: "https://fishingshirtsnow.com/store",
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
          title: "Fishing Shirts Now",
          description: "Fishing Shirts Now Store Page",
        }}
      />
      <WebPageJsonLd
        name="Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight"
        description="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        id="https://fishingshirtsnow.com/store/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section
        id="features"
        className="flex flex-col-reverse md:flex-row lg:flex-row justify-center container mx-auto my-10 relative px-4"
      >
        <div className="md:border md:border-r-1 md:border-l-transparent md:border-t-transparent md:border-b-transparent md:border-opacity-25 md:border-textLightGray md:pr-14 md:mr-14">
          <Breadcrumb />
          <FilterByPrice
            min={0}
            max={200}
            step={1}
            initialMin={initialMin}
            initialMax={initialMax}
            priceCap={10}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <div className="container mx-auto mt-5">
            <h2>SPONSOR:</h2>
            <iframe
              src="https://rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ez&f=ifr&linkID=10630a4648facad5e2cb15e825f69694&t=fishing-shirts-now00-20&tracking_id=fishing-shirts-now00-20"
              width="160"
              height="600"
              border="0"
              rel="nofollow"
              title="sponsor"
            ></iframe>
          </div>
        </div>
        <div>
          <p
            className={`${
              asPath !== "/store" && asPath !== "/store?page=1" && "hidden"
            }`}
          >
            Welcome to our fishing shirts store where you will find a huge
            variety of elegant high performance options. Take a look around and
            you will find different fabric and styles, vivid graphics with high
            visibility, which is important out there in the sea. Looking for sun
            protective clothing? We have you covered, our long sleeve collection
            has the highest rated picks chosen by our clients. We are constantly
            updating our catalog following your{" "}
            <Link href="/contact-us" className="hover:text-blogNavHoverBlue">
              feedback
            </Link>
            , to keep only the best shirts in the market right now. Navigate our
            store to find the best sellers or browse by categories: men, women,
            kids, fun collection, and even shop by brand: Hanes, Columbia,
            Koofin and more. Finally don’t forget to leave your feedback, we are
            always open to any suggestions to improve our content to make it
            more valuable for you.
          </p>
          {/* Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10 ${
              asPath !== "/store" && asPath !== "/store?page=1" && "hidden"
            }`}
          >
            {/* Categories */}
            {categories?.map((category, index) => (
              <Categories key={index} category={category} />
            ))}
          </div>
          <div className="my-10">
            <label className="font-medium opacity-75 mr-2">Sort by:</label>
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Please choose an option</option>
              <option value="name_asc">A-Z</option>
              <option value="name_desc">Z-A</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {/* Product */}
            {data?.products
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
          <Paginate
            page={data?.page}
            pages={data?.pages}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </section>
    </>
  );
};

export default Store;

export async function getStaticProps() {
  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );

  const { data: products } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`
  );

  return {
    props: { products, categories },
  };
}
