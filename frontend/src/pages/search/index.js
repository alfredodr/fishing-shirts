import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Product from "@/components/product/Product";
import Paginate from "@/components/common/Paginate";

const Search = ({ products, page, pages, keyword }) => {
  const router = useRouter();
  return (
    <section className="container mx-auto my-24 h-3/4 bg-gray-50">
      {products.length === 0 ? (
        <div className="bg-lightGray">
          <h2 className="text-4xl text-customBlack p-10">
            No results found for {router.query.s}
          </h2>
          <hr className="m-1" />
          <p className="p-10">
            Please try again with some different search terms.
          </p>
        </div>
      ) : (
        <div className="p-10">
          <h2 className="text-center font-bold text-4xl">
            Showing search results for {router.query.s}
          </h2>
          <hr className="mt-10 bg-black w-1/12 border-2 border-solid mx-auto" />
          <div className="flex items-center justify-center container mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-5">
              {/* Product */}
              {products?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Paginate page={page} pages={pages} keyword={keyword ? keyword : ""} />
    </section>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { query } = context;
  const keyword = query.s || "";
  const pageNumber = query.pageNumber || 1;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
  );
  const { products, page, pages } = data;

  return {
    props: { products, page, pages, keyword },
  };
}
