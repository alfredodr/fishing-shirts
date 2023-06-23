import React from "react";
import Product from "../product/Product";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-white px-5">
        <h2 className="text-center font-bold text-4xl p-10">
          Featured Products
        </h2>
        <hr className="w-24 border border-solid border-secondaryPaleBlack mx-auto" />
        <div className="mt-10 flex items-center justify-center container mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-5">
            {/* Product */}
            {products?.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
