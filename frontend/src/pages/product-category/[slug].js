import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

const Product = ({ products, categoryName, slug }) => {
  const initialMin = 0;
  const initialMax = 200;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [sortBy, setSortBy] = useState("");

  const route = useRouter();
  const { query } = route;
  const keyword = query?.s || "";
  const pageNumber = query?.page || 1;
  const [data, setData] = useState(products);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/products/${slug}?pageNumber=${pageNumber}&sortBy=${sortBy}`
        );

        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [slug, pageNumber, sortBy]);

  return (
    <>
      <NextSeo
        title={`${categoryName}`}
        titleTemplate="%s | Fishing Shirts Now"
        description={`Carefully selected collection of ${categoryName}`}
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}/`}
        next={`${
          process.env.NEXT_PUBLIC_FRONTEND_URL
        }/product-category/${slug}?page=${pageNumber + 1}`}
        openGraph={{
          type: "article",
          title: `${categoryName} | Fishing Shirts Now`,
          description: `Carefully selected collection of ${categoryName}`,
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}/`,
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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://fishingshirtsnow.com/",
          },
          {
            position: 2,
            name: "Product Categories",
            item: "https://fishingshirtsnow.com/store/",
          },
          {
            position: 2,
            name: `${categoryName}`,
            item: `https://fishingshirtsnow.com/store/product-category/${slug}/`,
          },
        ]}
      />
      <section className="flex flex-col-reverse md:flex-row lg:flex-row justify-center container mx-auto relative px-5">
        <div className="absolute top-5 md:left-5">
          <Breadcrumb />
        </div>
        <div className="mt-10 md:border md:border-r-1 md:border-l-transparent md:border-t-transparent md:border-b-transparent md:border-opacity-25 md:border-textLightGray md:pr-14 md:mr-14">
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
          <div className="container mx-auto mt-5 ">
            <h2>SPONSOR:</h2>
            <Link
              target="_blank"
              href="https://www.amazon.com/hz/audible/mlp/membership/plus?ref_=assoc_tag_ph_1524216631897&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=fishing-shirts-now00-20&linkId=16ea12bbe62d15f91c859914e2df3dff"
            >
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/Minerva-Plus-Associate-300x250-V08.png"
                }
                alt={"Try Audible Plus"}
                priority
                width={300}
                height={250}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </div>
        <div className="md:w-3/4 mt-16">
          <h1 className="text-5xl text-customBlack">{categoryName}</h1>
          <div className="my-10">
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Sort by:</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Title: A-Z</option>
              <option value="name_desc">Title: Z-A</option>
            </select>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {/* Products */}
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

  const { data: products } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/products/${slug}`
  );

  return {
    props: { products, categoryName, slug },
  };
}
