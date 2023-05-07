import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].src);

  return (
    <section className="bg-lightGray py-28">
      <div className="relative flex md:flex-row sm:flex-col container mx-auto">
        <div>
          <div className="relative w-[600px] h-[600px] bg-white overflow-hidden">
            <Image
              src={mainImage}
              alt={product.name}
              fill={true}
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority
            />
          </div>
          {/* Variants*/}
          {product.images.length > 1 && (
            <div className="container flex flex-row gap-5 flex-1 my-10">
              {product.images.slice(1).map((image, index) => (
                <Variants
                  key={index}
                  image={image}
                  setMainImage={setMainImage}
                />
              ))}
            </div>
          )}
        </div>
        <div className="md:ml-20 lg:md-20 mx-auto">
          <nav className="text-breadCrumbBlack">
            <Link href="/">Home</Link> /
            {product.categories
              .map((category) =>
                category._id
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              )
              .join(" / ")}
            / {product?.name}
          </nav>
          <h1 className="mb-2">{product.name}</h1>
          {product.price === 1 ? (
            <p className="mt-2 font-bold text-red-700">Currently unavailable</p>
          ) : (
            <>
              <em className="text-2xl">
                Amazon.com Price: ${product.price} (as of{" "}
                {new Date(product.updatedAt).toLocaleDateString() + ""}){" "}
              </em>
              <Link href={`${product.externalUrl}`} rel="nofollow" passHref>
                {/* Button */}
                <button
                  className="w-48 mt-2 px-3 py-2 bg-lightBlue text-white font-bold border-2 flex items-center md:text-left"
                  type="button"
                >
                  Buy Now On Amazon
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="container mx-auto">
        <p className="mt-2 text-slate-500 text-base">
          Categories:{" "}
          {product.categories
            .map((category) =>
              category._id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            )
            .join(", ")}
        </p>
        <hr className="m-1" />
        <p className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
          Description
        </p>
        <p className="text-lg mt-8">{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;
