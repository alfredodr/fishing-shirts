import React from "react";
import { NextSeo, WebPageJsonLd } from "next-seo";

const notFound = () => {
  return (
    <>
      <NextSeo
        title="Page not found"
        titleTemplate="%s | Fishing Shirts Now"
        noindex={true}
        openGraph={{
          type: "website",
          url: "https://fishingshirtsnow.com/404",
          title: "Page not found - Fishing Shirts Now",
          site_name: "Fishing Shirts Now",
        }}
      />
      <WebPageJsonLd
        name="Fishing Shirts Now"
        description="Get the best fishing shirts for your next trip"
        id="https://fishingshirtsnow.com/404/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section className="flex items-center justify-center container mx-auto my-24 relative">
        <div className="bg-white w-11/12 space-y-10 py-12 px-9">
          <h1 className="flex items-center justify-center text-customBlack text-5xl">
            This page doesn&apos;t seem to exist.
          </h1>
          <p className="flex items-center justify-center text-2xl font-bold text-customBlack">
            It looks like the link pointing here was faulty. Maybe try
            searching?
          </p>
        </div>
      </section>
    </>
  );
};

export default notFound;
