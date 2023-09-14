import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";
import { NextSeo, ProductJsonLd, BreadcrumbJsonLd } from "next-seo";
import Breadcrumb from "../common/Breadcrumb";
import styles from "../../styles/product.module.css";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(0);
  const length = product.images.length;
  const [zoomIn, setZoomIn] = useState(false);

  const handlePrevious = () => {
    const newIndex = mainImage - 1;
    setMainImage(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = mainImage + 1;
    setMainImage(newIndex >= length ? 0 : newIndex);
  };

  const handleZoom = () => {
    setZoomIn(!zoomIn);
  };

  return (
    <>
      <NextSeo
        title={`${product.name} - UV Protection - High Quality - Affordable Prices`}
        titleTemplate="%s | Fishing Shirts Now"
        description={product.description.slice(0, 2)}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
        openGraph={{
          type: "article",
          article: {
            publishedTime: `${product.createdAt}`,
            modifiedTime: `${product.updatedAt}`,
          },
          title: `${product.name} - Sun Protective - Fishing Shirts Now`,
          description: product.description.slice(0, 2),
          url: `https://fishingshirtsnow.com/product/${product.slug}/`,
          images: [
            {
              url: product.images[0].src,
              width: 500,
              height: 500,
              alt: `${product.name}`,
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          title: "Fishing Shirts Now",
          description: "Fishing Shirts Now Home Page",
        }}
      />
      <ProductJsonLd
        productName={product.name}
        images={[product.images[0].src]}
        description={product.description}
        brand={product.brand}
        offers={[
          {
            id: `https://fishingshirtsnow.com/product/${product.slug}/#product`,
            price: `${product.price}`,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `https://fishingshirtsnow.com/product/${product.slug}/`,
            seller: {
              type: "Organization",
              name: "Fishing Shirts Now",
              url: "https://fishingshirtsnow.com/",
            },
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://fishingshirtsnow.com/",
          },
          {
            position: 2,
            name: "Store",
            item: "https://fishingshirtsnow.com/store/",
          },
          {
            position: 3,
            name: "Product",
            item: `https://fishingshirtsnow.com/product/${product.slug}`,
          },
        ]}
      />

      <section className="bg-lightGray my-10 px-5">
        <div className="relative flex flex- flex-col md:flex-row lg:flex-row container mx-auto">
          <div className="md:w-1/2">
            <div
              className={`${
                zoomIn
                  ? "fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-75 items-center"
                  : "bg-lightGray"
              } flex align-middle justify-center`}
            >
              {/* Previous button */}
              {length > 1 && (
                <button
                  aria-label="previous image"
                  onClick={handlePrevious}
                  className={`my-auto h-16 ${
                    zoomIn
                      ? "text-white"
                      : "text-textLightGray hover:text-black "
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 md:w-10 md:h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}
              {/* Main Product Image */}
              <div
                className={`relative ${
                  zoomIn
                    ? "w-4/5 md:w-2/5 h-4/5"
                    : "w-full h-[28.125rem] md:h-[31.25rem] bg-lightGray"
                } `}
              >
                <Image
                  src={product.images[mainImage].src}
                  alt={product.images[mainImage].alt}
                  fill
                  priority
                  className="w-auto h-auto object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Next button */}
              {length > 1 && (
                <button
                  aria-label="next-image"
                  onClick={handleNext}
                  className={`my-auto h-16 ${
                    zoomIn
                      ? "text-white"
                      : "text-textLightGray hover:text-black"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 md:w-10 md:h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}

              {/* Magnifier */}
              {zoomIn ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 hover:cursor-pointer relative bottom-1/3 text-white"
                  onClick={handleZoom}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 hover:cursor-pointer relative text-textLightGray hover:text-black"
                  onClick={handleZoom}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              )}
            </div>
            {/* Grid */}
            {/* Variants*/}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-3  my-5 bg-lightGray overflow-hidden">
                {product.images.map((image, index) => (
                  <Variants
                    key={index}
                    image={image}
                    index={index}
                    mainImage={mainImage}
                    setMainImage={setMainImage}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="md:ml-20 lg:md-20 mx-auto md:w-1/2">
            <Breadcrumb />
            <h1 className="leading-normal my-2">{product.name}</h1>
            {product.price === 1 ? (
              <p className="mt-2 font-bold text-red-700">
                Currently unavailable
              </p>
            ) : (
              <>
                <em className="text-2xl opacity-90">
                  Amazon.com Price: ${product.price} (as of{" "}
                  {new Date(product.updatedAt).toLocaleDateString() + ""}){" "}
                </em>
                <Link href={`${product.externalUrl}`} rel="nofollow" passHref>
                  {/* Button */}
                  <button
                    className="w-48 my-5 px-3 py-2 bg-lightBlue hover:bg-blogNavHoverBlue text-white font-semibold border-2 flex items-center md:text-left"
                    type="button"
                  >
                    Buy Now On Amazon
                  </button>
                </Link>
                <div className="border border-l-transparent border-r-transparent border-b-transparent border-textLightGray border-opacity-25">
                  <p className="mt-2 opacity-75 text-base">
                    {product.categories.length === 1
                      ? `Category: `
                      : `Categories: `}
                    {product.categories.map((category) => {
                      const name = category._id
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ");

                      return (
                        <Link
                          key={category._id}
                          href={`/product-category/${category._id}/`}
                          className={`${styles.categories}`}
                        >
                          {name}
                        </Link>
                      );
                    })}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={`container mx-auto ${
            product.description[0] === "" && "hidden"
          }`}
        >
          <p className="text-lg font-medium mt-8 underline underline-offset-8 border border-b-1 border-l-transparent border-r-transparent border-t-transparent border-opacity-25 border-textLightGray">
            Description
          </p>
          {product.description.map((desc, index) => (
            <ul key={index}>
              <li className="text-lg my-5">{desc}</li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
