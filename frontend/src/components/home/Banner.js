import React from "react";
import Image from "next/image";
import { FaTshirt } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        id="home-banner"
        className="relative w-screen h-[calc(100vh-6rem)] flex items-center justify-center bg-paleBlack bg-opacity-20"
      >
        <div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
          <Image
            src="https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg"
            alt="Fisherman holding fishing rod"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        {/* Flex Container */}
        {/* container flex flex-col-reverse items-center px-6 mx-auto md:flex-row */}
        <div className="container flex items-center mx-auto">
          {/* Left Item */}
          <div className="flex flex-col items-center md:items-start lg:items-start">
            <h1 className="mb-4 sm:text-5xl text-4xl font-black text-center text-white md:text-left xl:max-w-lg leading-normal md:leading-normal">
              Fishing Shirts Deals You Do Not Want To Miss Today!
            </h1>
            <p className="hidden mb-4 text-xl text-center text-white md:text-left md:block xl:max-w-lg">
              We help you find the best fishing shirts at affordable prices that
              are carefully selected for you. All sizes, colors, and textures in
              stock right now. We stand by the quality of our products.
            </p>
            <Link href="/store/" passHref>
              {/* Button */}
              <button
                className="w-48 p-3 px-6 pt-2 bg-white text-lg text-black font-bold hover:text-white hover:bg-transparent hover:border-white-700 border-2 flex items-center md:text-left rounded"
                type="button"
              >
                <FaTshirt className="mr-3" />
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
