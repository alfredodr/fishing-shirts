import React from "react";
import Product from "../product/Product";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-white">
        <h2 className="text-center font-bold text-4xl p-10">
          Featured Products
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
      </section>
    </>
  );
};

export default FeaturedProducts;
