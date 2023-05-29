import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].src);

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
              url: `https://fishingshirtsnow.com/${product.slug}`,
              images: [
                {
                  url: mainImage,
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
            images={[mainImage]}
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
      <section className="bg-lightGray py-28 px-5">
        <div className="relative flex flex-col md:flex-row lg:flex-row container mx-auto">
          <div className="md:w-1/2">
            <div className="relative bg-white overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain w-auto h-auto cursor-pointer mx-auto"
                priority
              />
            </div>
            {/* Grid */}
            {/* Variants*/}
            {product.images.length > 1 && (
              <div className="container flex items-center justify-start flex-wrap my-5">
                {product.images.map((image, index) => (
                  <Variants
                    key={index}
                    image={image}
                    setMainImage={setMainImage}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="md:ml-20 lg:md-20 mx-auto md:w-1/2">
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
                    className="w-48 mt-2 mb-4 px-3 py-2 bg-lightBlue text-white font-bold border-2 flex items-center md:text-left"
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
        <div className="container mx-auto">
          <hr className="m-1" />
          <p className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
            Description
          </p>
          {product.description.map((desc, index) => (
            <ul key={index}>
              <li className="text-lg">{desc}</li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
