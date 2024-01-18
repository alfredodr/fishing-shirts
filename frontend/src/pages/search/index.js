import React from "react";
import axios from "axios";
import Product from "@/components/product/Product";
import Paginate from "@/components/common/Paginate";
import { NextSeo, WebPageJsonLd } from "next-seo";

const Search = ({
  products,
  pageNumber,
  pages,
  keyword,
  startRange,
  endRange,
  count,
}) => {
  return (
    <>
      <NextSeo
        title={`Search results for ${keyword}`}
        titleTemplate="%s | Fishing Shirts Now"
        description={`Search results for ${keyword} | Fishing Shirts Now`}
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND_URL}`}
        openGraph={{
          type: "article",
          title: `Search results for ${keyword} | Fishing Shirts Now`,
          description: `Search results for  ${keyword}`,
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/search/?s=${keyword}`,
        }}
        twitter={{
          title: `${keyword} | Fishing Shirts Now`,
          description: `Search results for ${keyword} | Fishing Shirts Now`,
        }}
      />
      <WebPageJsonLd
        name={`${keyword} | Fishing Shirts Now`}
        description={`Search results for ${keyword} | Fishing Shirts Now`}
        id={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/search/?s=${keyword}`}
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section className="container mx-auto my-20 bg-gray-50 py-11 px-5">
        {products.length === 0 ? (
          <>
            <h1 className="text-4xl text-customBlack mb-5">
              No results found for &quot;{keyword}&quot;
            </h1>
            <p>Please try again with some different search terms.</p>
          </>
        ) : (
          <>
            <h1 className="text-center text-4xl">
              Showing {startRange}-{endRange} out of {count} search results for
              &quot;{keyword}&quot;
            </h1>
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
          </>
        )}
        <Paginate
          page={pageNumber}
          pages={pages}
          keyword={keyword ? keyword : ""}
        />
      </section>
    </>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { query } = context;
  const keyword = query.s || "";
  const pageNumber = query.page || 1;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
  );
  const { products, pages, startRange, endRange, count } = data;

  return {
    props: {
      products,
      pageNumber,
      pages,
      keyword,
      startRange,
      endRange,
      count,
    },
  };
}
