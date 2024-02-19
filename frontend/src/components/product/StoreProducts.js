import React from "react";
import Link from "next/link";
import Image from "next/image";

const StoreProducts = ({ product }) => {
  return (
    <Link href={`/product/${product?.slug}`}>
      <div className="flex flex-col mb-0 md:mb-10 text-center">
        <div className="relative w-full h-80 bg-lightGray">
          <Image
            src={product?.images[0].src}
            alt={product?.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain mix-blend-multiply"
          />
        </div>

        <span className="text-sm  font-semibold mt-0 md:mt-8">
          {product?.brand}
        </span>

        <span className="text-sm  font-medium mt-5">{product?.name}</span>

        <span className="mt-2 text-slate-500 text-sm ">
          {product?.category}
        </span>
        <span className="mt-2 text-sm">
          {product?.categories[0]._id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </span>
        {product?.price === 1 ? (
          <span className="mt-2 font-medium text-red-700 ">
            Currently unavailable
          </span>
        ) : (
          <span className="mt-2 font-semibold ">${product?.price}</span>
        )}
      </div>
    </Link>
  );
};

export default StoreProducts;
