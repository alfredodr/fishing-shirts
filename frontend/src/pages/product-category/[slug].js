import React, { useState } from "react";
import axios from "axios";
import StoreProducts from "@/components/product/StoreProducts";
import FilterByPrice from "@/components/product/FilterByPrice";
import Paginate from "@/components/common/Paginate";

const Product = ({ products, page, pages, keyword, categoryName, slug }) => {
  const initialMin = 0;
  const initialMax = 100;
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  return (
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
        <h1 className="text-5xl text-customBlack my-10">{categoryName}</h1>
        <div className="flex items-center justify-center container mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
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
          slug={slug}
          keyword={keyword ? keyword : ""}
        />
      </div>
    </section>
  );
};

export default Product;

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
