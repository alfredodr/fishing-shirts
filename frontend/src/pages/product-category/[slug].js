import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { NextSeo, WebPageJsonLd } from "next-seo";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";

const Product = ({ categoryName, slug }) => {
  const initialMin = 0;
  const initialMax = 200;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  const route = useRouter();
  const { query } = route;
  const keyword = query?.s || "";
  const pageNumber = query?.pageNumber || 1;
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/products/${slug}?pageNumber=${pageNumber}`
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [slug, pageNumber]);

  return (
    <>
      <NextSeo
        title={`${categoryName}`}
        titleTemplate="%s | Fishing Shirts Now"
        description={`Carefully selected collection of ${categoryName}`}
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}`}
        next={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/store?pageNumber=${
          pageNumber + 1
        }`}
        openGraph={{
          type: "article",
          title: `${categoryName} | Fishing Shirts Now`,
          description: `Carefully selected collection of ${categoryName}`,
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}`,
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
          title: `${categoryName} | Fishing Shirts Now`,
          description: `Fishing Shirts Now products by category ${categoryName}`,
        }}
      />
      <WebPageJsonLd
        name={`${categoryName} | Fishing Shirts Now`}
        description={`Carefully selected collection of ${categoryName}`}
        id={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}/#corporation`}
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section
        id="features"
        className="flex flex-col-reverse md:flex-row lg:flex-row justify-center container mx-auto my-24 relative px-4"
      >
        <div className="md:border md:border-r-1 md:border-l-transparent md:border-t-transparent md:border-b-transparent md:border-opacity-25 md:border-textLightGray md:pr-14 md:mr-14">
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
        <div>
          <h1 className="text-5xl text-customBlack my-10">{categoryName}</h1>
          <div className="flex items-center justify-center container mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {/* Product */}
              {data?.products
                ?.filter((product) => {
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
            page={data?.page}
            pages={data?.pages}
            slug={slug}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </section>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );

  const paths = data.map((category) => {
    return { params: { slug: category.slug } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params?.slug;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    props: { categoryName, slug },
    revalidate: 10,
  };
}
