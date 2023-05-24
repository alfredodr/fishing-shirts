import React from "react";
import Link from "next/link";
import Image from "next/image";

const StoreProducts = ({ product }) => {
  return (
    <div className={`p-2 flex flex-col ${product.price === 1 && "hidden"}`}>
      <Link href={`/product/${product.slug}`} passHref>
        <div className="relative w-full h-60 transform transition duration-500 hover:scale-110 overflow-hidden">
          <Image
            src={product.images[0].src}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </Link>
      <Link
        href={`/product/${product.slug}`}
        passHref
        className="text-lg font-medium mt-8"
      >
        <p className="text-sm font-medium">{product.name}</p>
      </Link>
      <span className="mt-2 text-slate-500 text-sm">{product.category}</span>
      <span className="mt-2 text-sm">
        {product.categories[0]._id
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </span>
      {product.price === 1 ? (
        <p className="mt-2 font-bold text-red-700">Currently unavailable</p>
      ) : (
        <span className="mt-2 font-bold">${product.price}</span>
      )}
    </div>
  );
};

export default StoreProducts;
