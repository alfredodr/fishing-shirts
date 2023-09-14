import React from "react";
import Link from "next/link";
import Image from "next/image";

const Categories = ({ category }) => {
  return (
    <section className={`flex flex-col ${category.count === 0 && "hidden"}`}>
      <Link href={`product-category/${category?.slug}`} passHref>
        <div className="relative w-full h-60">
          <Image
            src={category?.image?.src}
            alt={category?.image?.alt}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="object-cover"
          />
          <span className="absolute left-4 right-4 bottom-4 text-center z-50 bg-white bg-opacity-80">
            <p>{category?.name.toUpperCase()}</p>
            <mark className="bg-transparent opacity-50 block">
              {category?.count} PRODUCTS
            </mark>
          </span>
        </div>
      </Link>
    </section>
  );
};

export default Categories;
