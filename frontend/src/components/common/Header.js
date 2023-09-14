import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SearchBox from "./SearchBox";

const Header = () => {
  const [isActive, setActive] = useState();
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
            ? "bg-paleBlack bg-opacity-25"
            : "bg-white"
        } w-full h-24 z-50 flex items-center`}
      >
        {/* Navbar */}
        <nav className="container mx-auto flex items-center justify-between px-5">
          {/* Flex container */}
          {/* Logo */}
          <Link href="/" className="relative w-[13.063rem] h-[4.375rem] ">
            <Image
              src={
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "/fsn-transparent-logo-250x84.webp"
                  : "/fsn-black-logo.webp"
              }
              alt="fishing shirts now logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              } hover:opacity-75`}
            >
              Home
            </Link>
            <Link
              href="/store/"
              className={`${
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "text-lightWhite"
                  : "text-black"
              } hover:opacity-75`}
            >
              Store
            </Link>
            <Link
              href="/blog/"
              className={`${
                router.pathname === "/" ||
                router.pathname === "/about" ||
                router.pathname === "/contact-us"
                  ? "text-lightWhite"
                  : "text-black"
              } hover:opacity-75`}
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
            {isActive === true ? (
              <RxCross1 color="ffffff" />
            ) : (
              <RxHamburgerMenu color="ffffff" />
            )}
          </button>
        </nav>
        {/* Mobile Menu */}
        <nav className={`${isActive === true ? null : "hidden"} z-40`}>
          <ul
            id="menu"
            className="absolute left-0 right-0 top-24 flex flex-col font-semibold bg-gray-100 divide-y divide-slate-300 border"
          >
            <li className="py-3">
              <Link
                href="/"
                className="block mx-10 px-4 py-2 hover:bg-gray-200"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/store/"
                className="block mx-10 px-4 py-2 hover:bg-gray-200"
                onClick={toggleMobileMenu}
              >
                Store
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/blog/"
                className="block mx-10 px-4 py-2 hover:bg-gray-200"
                onClick={toggleMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="py-3">
              <SearchBox
                toggleMobileMenu={toggleMobileMenu}
                isActive={isActive}
                id="search mobile"
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
