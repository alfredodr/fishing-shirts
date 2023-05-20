import React from "react";
import Link from "next/link";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className={`p-2 flex flex-col ${product.price === 1 && "hidden"}`}>
      <Link href={`/products/${product.slug}`} passHref>
        <div className="relative w-full h-60 transform transition duration-500 hover:scale-110">
          <Image
            src={product.images[0].src}
            alt={product.name}
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </Link>
      <Link href={`/products/${product.slug}`} passHref className="mt-8">
        <p className="text-sm font-bold">{product.name}</p>
      </Link>

      <span className="mt-2 text-sm text-slate-500">
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

export default Product;
