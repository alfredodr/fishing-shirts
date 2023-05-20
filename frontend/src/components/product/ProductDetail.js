import React, { useState } from "react";
import Link from "next/link";
import Variants from "./Variants";
import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].src);

  return (
    <>
      <NextSeo
        title={`${product.name} - UV Protection - High Quality - Affordable Prices`}
        titleTemplate="%s | Fishing Shirts Now"
        description={product.description.slice(0, 2)}
        canonical={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.slug}`}
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
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.slug}`,
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
            id: `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${product.slug}/#product`,
            price: `${product.price}`,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${product.slug}`,
            seller: {
              type: "Organization",
              name: "Fishing Shirts Now",
              url: "https://fishingshirtsnow.com/",
            },
          },
        ]}
      />
      <section className="bg-lightGray py-28">
        <div className="relative flex flex-col md:flex-row lg:flex-row container mx-auto">
          <div className="min-w-fit">
            <div className="relative w-full h-[600px] bg-white overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                fill={true}
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                className="object-contain"
                // style={{ objectFit: "contain" }}
                priority
              />
            </div>
            {/* Grid */}
            {/* Variants*/}
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-5">
                {product.images.map((image, index) => (
                  <Variants
                    key={index}
                    image={image}
                    setMainImage={setMainImage}
                    product={product}
                    mainImage={mainImage}
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
