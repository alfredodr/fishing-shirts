import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const GetProduct = ({ productSlug }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${productSlug}`
        );

        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [productSlug]);
  return (
    <>
      {product && (
        <section className="mx-5">
          <div>
            <Link href={`/product/${product?.slug}`} passHref>
              <div className="relative w-full h-60">
                <Image
                  src={product?.images[0].src}
                  alt={product?.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default GetProduct;
