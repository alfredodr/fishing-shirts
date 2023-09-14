import React from "react";
import Image from "next/image";
import { NextSeo, WebPageJsonLd } from "next-seo";
import Link from "next/link";
import { GiFishingPole } from "react-icons/gi";

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
      <section className="container mx-auto my-10 px-5 w-screen h-[calc(100vh-11rem)] flex items-center justify-center bg-opacity-20">
        <div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
          <Image
            unoptimized
            src="https://fsn-site.s3.amazonaws.com/404/lake-3113868_1280.jpg"
            alt="Fisherman holding fishing rod"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        <div className="w-11/12 px-10">
          <div className="container flex flex-row">
            <h1 className="text-slate-50 text-5xl mr-2">Off the Hook!</h1>
            <GiFishingPole size={40} color="fffafa" />
          </div>
          <p className="text-slate-50 mt-5">
            The page you're trying to fish out seems to have slipped off our
            hook!
          </p>
          <Link href="/store/" passHref>
            <button
              className=" mt-5 w-56 p-3 px-6 pt-2 bg-white text-black font-bold rounded hover:text-slate-50 hover:bg-transparent hover:border-white-700 hover:border-white-700 border-2"
              type="button"
            >
              Continue shopping
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default notFound;
