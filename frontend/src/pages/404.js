import React from "react";
import { NextSeo, WebPageJsonLd } from "next-seo";
import SearchBox from "@/components/common/SearchBox";

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
      <section className="container mx-auto my-10 px-5 bg-white">
        <div className="w-11/12 space-y-10 py-10">
          <h1 className="text-customBlack text-5xl px-10">
            This page doesn&apos;t seem to exist.
          </h1>
          <p className="text-2xl font-bold text-customBlack px-10">
            It looks like the link pointing here was faulty. Maybe try
            searching?
          </p>
          <SearchBox id="search 404" />
        </div>
      </section>
    </>
  );
};

export default notFound;
