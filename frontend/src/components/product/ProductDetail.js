import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";
import Head from "next/head";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].src);

  return (
    <>
      <Head>
        <title>{`${product.name} - Fishing Shirts Now`}</title>
        <meta name="description" content={product.description.slice(0, 2)} />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.slug}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${product.name} - Sun Protective - Fishing Shirts Now`}
        />
        <meta
          property="og:description"
          content={product.description.slice(0, 2)}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.slug}`}
        />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2023-04-10T00:11:28+00:00"
        />
        <meta property="og:image" content={mainImage} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
      </Head>
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
              <p className="mt-2 font-bold text-red-700">
                Currently unavailable
              </p>
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
    </>
  );
};

export default ProductDetail;
