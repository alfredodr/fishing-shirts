import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SearchBox from "./SearchBox";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const router = useRouter();

  const mobileMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fishingshirtsnow.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fishing Shirts Now - UV Protection - High Quality - Affordable Prices"
        />
        <meta
          property="og:description"
          content="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."
        />
        <meta property="og:url" content="https://fishingshirtsnow.com/" />
        <meta property="og:site_name" content="Fishing Shirts Now" />
      </Head>

      <header
        className={`${
          router.pathname === "/" ? "bg-lightBlack" : "bg-white"
        } absolute top-0 w-full z-10`}
      >
        {/* Navbar */}
        <nav className="container mx-auto flex items-center justify-between">
          {/* Flex container */}
          {/* Logo */}
          <Link href="/" className={`${router.pathname === "/" && "w-40"}`}>
            <div className="relative w-52 h-full overflow-hidden">
              <Image
                src={
                  router.pathname === "/"
                    ? "/FSN-Transparent-Logo-250x250-1.png.webp"
                    : "/fsn-black-logo.webp"
                }
                alt="fishing shirts now logo"
                width={209}
                height={5}
              />
            </div>
          </Link>
          {/* Menu Items */}
          <div className="hidden space-x-7 items-center md:flex">
            <Link
              href="/"
              className={`${
                router.pathname === "/" ? "text-lightWhite" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="/store"
              className={`${
                router.pathname === "/" ? "text-lightWhite" : "text-black"
              }`}
            >
              Store
            </Link>
            <Link
              href="/blog"
              className={`${
                router.pathname === "/" ? "text-lightWhite" : "text-black"
              }`}
            >
              Blog
            </Link>
            {/* Button */}
            <SearchBox />
          </div>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="flex items-center justify-center cursor-pointer hamburger relative w-8 h-8 md:hidden focus:outline-none bg-lightBlue rounded"
            onClick={mobileMenu}
          >
            {isActive === true ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`${
            isActive === true ? null : "hidden"
          } md:hidden w-full bg-lightGray"`}
        >
          <div
            id="menu"
            className="flex flex-col font-bold bg-lightGray divide-y divide-slate-300"
          >
            <div className="py-4">
              <Link href="/" className="mx-10">
                Home
              </Link>
            </div>
            <div className="py-4">
              <Link href="/store" className="mx-10">
                Store
              </Link>
            </div>
            <div className="py-4">
              <Link href="#" className="mx-10">
                Blog
              </Link>
            </div>
            <div className="py-4">
              <SearchBox />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
