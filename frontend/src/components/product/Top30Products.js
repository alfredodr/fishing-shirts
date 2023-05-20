import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Top30Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: top30Products } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/top`
        );

        setProducts(top30Products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {/* Features Section */}
      <section className="mx-5">
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

export default Top30Products;
