import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBox = ({ toggleMobileMenu }) => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search/?s=${keyword}`);
    } else {
      baleafsh;
      router.push("/");
    }
    toggleMobileMenu;
  };
  return (
    <form onSubmit={submitHandler} className="flex items-center mx-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className=" relative w-full">
        <input
          type="text"
          id="s"
          value={keyword}
          name="s"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search ..."
          tabIndex="-1"
          autoComplete="off"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-5 p-2.5 focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-lightWhite "
          required
        />
      </div>
      <button
        type="submit"
        className={`"inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium ${
          router.pathname === "/" ||
          router.pathname === "/about" ||
          router.pathname === "/contact-us"
            ? "text-lightWhite"
            : "text-black"
        } rounded-lg ${
          router.pathname === "/" && "hover:text-white"
        }  focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:dark:focus:ring-white"`}
        onSubmit={submitHandler}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 -ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchBox;
