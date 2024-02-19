import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import MobileProductFilter from "@/components/product/MobileProductFilter";
import StoreProducts from "@/components/product/StoreProducts";
import Paginate from "@/components/common/Paginate";
import Breadcrumb from "@/components/common/Breadcrumb";
import FilterByCategory from "@/components/product/FilterByCategory";
import FilterByBrand from "@/components/product/FilterByBrand";
import FilterByPrice from "@/components/product/FilterByPrice";

const Product = ({ products, categories, categoryName, slug }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [sortBy, setSortBy] = useState("name_asc");
  const [checkedBrands, setCheckedBrands] = useState([]);

  const [data, setData] = useState(products ? products : {});

  const router = useRouter();
  const { asPath, query } = router;
  const keyword = query?.s || "";
  const pageNumber = query?.page || 1;

  //Unique Brands
  const brands = data?.uniqueBrands;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: allProducts } = await axios.get(
          `${
            process.env.NEXT_PUBLIC_BACKEND_URL
          }/api/categories/products/${slug}?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}&brands=${checkedBrands.join(
            ","
          )}&min=${min}&max=${max}`
        );

        setData(allProducts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [slug, keyword, pageNumber, sortBy, checkedBrands, min, max]);

  return (
    <>
      <NextSeo
        title={`${categoryName} ${
          data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
        }`}
        titleTemplate="%s | Fishing Shirts Now"
        description={`Carefully selected collection of ${categoryName}`}
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`}
        openGraph={{
          type: "article",
          title: `${categoryName} ${
            data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
          }`,
          description: `Carefully selected collection of ${categoryName}`,
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${slug}`,
        }}
        twitter={{
          title: `${categoryName} ${
            data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
          }`,
          description: `Fishing Shirts Now products by category ${categoryName}`,
        }}
      />
      <WebPageJsonLd
        name={`${categoryName} ${
          data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
        }`}
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
            item: `https://fishingshirtsnow.com/store/product-category/${slug}`,
          },
        ]}
      />
      <section className="px-5 md:px-0 relative container mx-auto">
        <div className="mt-5">
          <Breadcrumb />
        </div>
        <div className="block md:hidden">
          <MobileProductFilter
            categories={categories}
            brands={brands}
            checkedBrands={checkedBrands}
            setCheckedBrands={setCheckedBrands}
            count={data?.count}
            router={router}
            asPath={asPath}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMin={setMin}
            setMax={setMax}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row ">
          <aside className="mt-3 pr-5 md:border md:border-l-transparent md:border-t-transparent md:border-b-transparent md:border-opacity-25 md:border-textLightGray hidden md:block">
            <FilterByCategory categories={categories} />

            <FilterByBrand
              brands={brands}
              checkedBrands={checkedBrands}
              setCheckedBrands={setCheckedBrands}
              count={data?.count}
              router={router}
              asPath={asPath}
            />

            <FilterByPrice
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMin={setMin}
              setMax={setMax}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              router={router}
              asPath={asPath}
            />
          </aside>
          <div className="md:ml-5 mt-0 md:mt-16">
            <h1 className="text-2xl md:text-5xl text-customBlack">
              {categoryName}
            </h1>

            {data?.count !== 0 ? (
              <div className="flex items-center justify-between">
                <span>{data?.count} Products</span>
                <div className="my-5 flex flex-row">
                  <label htmlFor="sort">Sort by:</label>
                  <select
                    id="sort"
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-lightGray cursor-pointer border rounded-md p-1 text-base"
                  >
                    <option value="name_asc">Title: A-Z</option>
                    <option value="name_desc">Title: Z-A</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="mt-10">No products found.</div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {/* Products for current cateogry*/}
              {data?.products
                ?.filter((product) => {
                  return product?.price >= min && product?.price <= max;
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
    fallback: false,
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

  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );

  return {
    props: { products, categories, categoryName, slug },
  };
}
