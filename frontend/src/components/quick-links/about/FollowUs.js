import React from "react";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const FollowUs = () => {
  return (
    // Banner Section
    <section className="relative md:w-full h-[600px] flex items-center justify-center bg-paleBlack bg-opacity-20 ">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
        <Image
          src="https://fsn-site.s3.amazonaws.com/about/fisherman-river.jpg"
          alt="Fisherman in the river"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      {/* Flex Container */}
      <div className="md:w-3/12 h-full flex flex-col items-center justify-center space-y-11 mx-auto bg-followUsLightGray">
        <div className="w-28 border-t-4 border-t-lightBlue"></div>
        <h2 className="text-5xl font-bold text-center leading-normal text-black">
          Follow Us
        </h2>
        {/* Connect with us */}
        <div className="flex flex-row gap-4 text-slate-500">
          <Link
            href="https://www.facebook.com/fishingshirtsnow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="text-3xl hover:cursor-pointer hover:bg-lightBlack" />
          </Link>
          <Link
            href="https://www.instagram.com/live_fishing_shirts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-3xl hover:cursor-pointer hover:bg-lightBlack" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
