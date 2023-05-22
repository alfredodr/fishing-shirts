import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    // Banner Section
    <section className="relative w-screen h-screen flex items-center justify-center bg-paleBlack bg-opacity-20">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
        <Image
          src="https://fsn-site.s3.amazonaws.com/about/fisherman-591699_1280.jpg"
          alt="Fisherman holding fishing rod"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      {/* Flex Container */}
      <div className="container flex items-center justify-center mx-auto">
        <h1 className="text-8xl font-bold text-center leading-normal text-white">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default Banner;
