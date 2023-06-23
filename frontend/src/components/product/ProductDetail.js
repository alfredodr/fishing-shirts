import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";

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
      {product.price === 1 ? (
        <NextSeo
          noindex={true}
          title={`${product.name} - UV Protection - High Quality - Affordable Prices`}
          titleTemplate="%s | Fishing Shirts Now"
          description={product.description.slice(0, 2)}
        />
      ) : (
        <>
          <NextSeo
            title={`${product.name} - UV Protection - High Quality - Affordable Prices`}
            titleTemplate="%s | Fishing Shirts Now"
            description={product.description.slice(0, 2)}
            canonical={`https://fishingshirtsnow.com/product/${product.slug}`}
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
              url: `https://fishingshirtsnow.com/product/${product.slug}`,
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
                url: `https://fishingshirtsnow.com/product/${product.slug}`,
                seller: {
                  type: "Organization",
                  name: "Fishing Shirts Now",
                  url: "https://fishingshirtsnow.com/",
                },
              },
            ]}
          />
        </>
      )}
      <section className="bg-lightGray py-28 px-5 ">
        <div className="relative flex flex- flex-col md:flex-row lg:flex-row container mx-auto">
          <div className="md:w-1/2">
            <div
              className={`${
                zoomIn
                  ? "fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-75 items-center"
                  : "bg-white"
              } flex align-middle justify-center`}
            >
              {/* Previous button */}
              <div
                className={` ${
                  zoomIn ? "h-4/5" : "h-[65vh]"
                } bg-white flex justify-center items-center`}
              >
                {length > 1 && (
                  <button
                    aria-label="previous image"
                    onClick={handlePrevious}
                    className="my-auto h-16 text-textLightGray hover:text-black p-5"
                  >
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>

              <div
                className={`relative ${
                  zoomIn ? "w-2/5 h-4/5" : "w-full h-[65vh]"
                } bg-white`}
              >
                <Image
                  src={product.images[mainImage].src}
                  alt={product.images[mainImage].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              {/* Next button */}
              <div
                className={` ${
                  zoomIn ? "h-4/5" : "h-[65vh]"
                } bg-white flex justify-center items-center`}
              >
                {length > 1 && (
                  <button
                    aria-label="next-image"
                    onClick={handleNext}
                    className="my-auto h-16 text-textLightGray hover:text-black p-5"
                  >
                    <svg className="w-7 h-w-7 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>

              {/* Magnifier */}
              {zoomIn ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 hover:cursor-pointer z-50 relative right-12 bottom-1/3 text-textLightGray hover:text-black"
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
                  className="w-7 h-7 hover:cursor-pointer z-50 right-11 bottom-64 text-textLightGray hover:text-black m-3"
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
                    setMainImage={setMainImage}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="md:ml-20 lg:md-20 mx-auto md:w-1/2">
            <nav className="text-breadCrumbBlack">
              <Link href="/">Home</Link> / &nbsp;
              {product.categories
                .map((category) =>
                  category._id
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                )
                .join(" / ")}
              &nbsp; / {product?.name}
            </nav>
            <h1 className="leading-normal my-5">{product.name}</h1>
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
                    className="w-48 my-5 px-3 py-2 bg-lightBlue text-white font-bold border-2 flex items-center md:text-left"
                    type="button"
                  >
                    Buy Now On Amazon
                  </button>
                </Link>
                <div className="border border-l-transparent border-r-transparent border-b-transparent border-textLightGray border-opacity-25">
                  <p className="mt-2 text-slate-500 text-base">
                    {product.categories.length === 1
                      ? `Category: `
                      : `Categories: `}
                    {product.categories
                      .map((category) =>
                        category._id
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")
                      )
                      .join(", ")}
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
          <hr className="m-1" />
          <p className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
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
