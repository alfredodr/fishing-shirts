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

  const toggleMobileMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header
        className={`${
          router.pathname === "/" ||
          router.pathname === "/about" ||
          router.pathname === "/contact-us"
            ? "bg-lightBlack"
            : "bg-white"
        } absolute top-0 w-full h-24 z-10 flex items-center`}
      >
        {/* Navbar */}
        <nav className="container mx-auto flex items-center justify-between px-5">
          {/* Flex container */}
          {/* Logo */}
          <Link
            href="/"
            className={`${
              (router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us") &&
              "w-40"
            }`}
          >
            <Image
              src={
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "/fsn-transparent-logo-250x84.webp"
                  : "/fsn-black-logo.webp"
              }
              alt="fishing shirts now logo"
              width={209}
              height={100}
              quality={100}
            />
          </Link>
          {/* Menu Items */}
          <div className="hidden space-x-7 items-center md:flex">
            <Link
              href="/"
              className={`${
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "text-lightWhite"
                  : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="/store"
              className={`${
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "text-lightWhite"
                  : "text-black"
              }`}
            >
              Store
            </Link>
            <Link
              href="/blog"
              className={`${
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "text-lightWhite"
                  : "text-black"
              }`}
            >
              Blog
            </Link>
            {/* Button */}
            <SearchBox id="search desktop" />
          </div>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            aria-label="menu button"
            className="flex items-center justify-center cursor-pointer hamburger relative w-8 h-8 md:hidden focus:outline-none bg-lightBlue rounded"
            onClick={toggleMobileMenu}
          >
            {isActive === true ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`${
            isActive === true ? null : "hidden"
          } md:hidden bg-lightGray"`}
        >
          <div
            id="menu"
            className="absolute left-0 right-0 top-24 flex flex-col font-bold bg-lightGray divide-y divide-slate-300"
          >
            <div className="py-4">
              <Link href="/" className="mx-10" onClick={toggleMobileMenu}>
                Home
              </Link>
            </div>
            <div className="py-4">
              <Link href="/store" className="mx-10" onClick={toggleMobileMenu}>
                Store
              </Link>
            </div>
            <div className="py-4">
              <Link href="/blog" className="mx-10" onClick={toggleMobileMenu}>
                Blog
              </Link>
            </div>
            <div className="py-4">
              <SearchBox
                toggleMobileMenu={toggleMobileMenu}
                isActive={isActive}
                id="search mobile"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
