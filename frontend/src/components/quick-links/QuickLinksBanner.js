import React from "react";
import Image from "next/image";

const QuickLinksBanner = ({ title, urlSrc, altText }) => {
  return (
    // QuickLinksBanner Section
    <section className="relative w-screen h-screen flex items-center justify-center bg-paleBlack bg-opacity-20">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
        <Image
          src={urlSrc}
          alt={altText}
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      {/* Flex Container */}
      <div className="container flex items-center justify-center mx-auto">
        <h1 className="sm:text-5xl md:text-8xl lg:text-8xl font-bold text-center leading-normal text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default QuickLinksBanner;
