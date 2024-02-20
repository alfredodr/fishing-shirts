import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreProducts from "@/components/product/StoreProducts";
import MobileProductFilter from "@/components/product/MobileProductFilter";
import FilterByPrice from "@/components/product/FilterByPrice";
import FilterByCategory from "@/components/product/FilterByCategory";
import FilterByBrand from "@/components/product/FilterByBrand";
import Paginate from "@/components/common/Paginate";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/common/Breadcrumb";

const Store = ({ products, categories }) => {
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
          }/api/products?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}&brands=${checkedBrands.join(
            ","
          )}&min=${min}&max=${max}`
        );

        setData(allProducts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [keyword, keyword, pageNumber, sortBy, checkedBrands, min, max]);

  return (
    <>
      <NextSeo
        title={`Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight ${
          data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
        }`}
        titleTemplate="%s | Fishing Shirts Now"
        description="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`}
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
          title: `Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight ${
            data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
          }`,
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
          title: `Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight ${
            data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
          }`,
          description: "Fishing Shirts Now Store Page",
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
            item: "https://fishingshirtsnow.com/store",
          },
        ]}
      />
      <WebPageJsonLd
        name={`Fishing Shirts Store - Popular Brands - Sun Protection - Lightweight ${
          data?.pages > 1 ? `- Page ${pageNumber} of ${data?.pages}` : ``
        }`}
        description="Check our fishing shirts store with the best for all members of the family. Short sleeve and long sleeve high perfoming choices carefully selected for you."
        id="https://fishingshirtsnow.com/store/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section
        id="features"
        className="px-5 md:px-0 relative container mx-auto"
      >
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
        <div className="flex flex-col-reverse md:flex-row lg:flex-row">
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
          <div className="md:ml-5">
            {data?.count !== 0 ? (
              <div className="flex items-center justify-between">
                <span>{data?.count} Products</span>

                <div className="flex flex-row">
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
              <div className="my-10">No products found.</div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {/* Product */}
              {data?.products
                ?.filter((product) => {
                  return product.price >= min && product.price <= max;
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
