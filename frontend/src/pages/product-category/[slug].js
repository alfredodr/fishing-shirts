import React, { useState } from "react";
import axios from "axios";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";

const product = ({ products, page, pages, keyword, categoryName, slug }) => {
  const initialMin = 0;
  const initialMax = 100;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  return (
    <section
      id="features"
      className="flex flex-col-reverse md:flex-row lg:flex-row justify-center container mx-auto my-24 relative"
    >
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
      <hr className="rotate-90 w-10  invisible md:visible lg:visible bg-textLightGray" />
      <div className="w-4/5">
        <h1 className="text-5xl text-customBlack">{categoryName}</h1>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-32">
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
        <Paginate
          page={page}
          pages={pages}
          slug={slug}
          keyword={keyword ? keyword : ""}
        />
      </div>
    </section>
  );
};

export default product;

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const pageNumber = query.pageNumber || 1;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/products/${slug}?pageNumber=${pageNumber}`
  );

  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const { products, page, pages } = data;

  return {
    props: { products, page, pages, categoryName, slug },
  };
}
