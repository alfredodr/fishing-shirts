import React, { useState } from "react"
import Image from "next/image"
import { FaTshirt } from "react-icons/fa";

const Banner = () => {
  const [isActive, setActive] = useState("false");

  const mobileMenu = () => {
    setActive(!isActive);
  };
  
  return (
    // Banner Section
    <section id="home-banner" className="relative w-screen h-screen">
        <header className="bg-lightBlack">
        {/* Navbar */}
          <nav className="container mx-auto">
            {/* Flex container */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="w-40">
                <Image 
                  src="/FSN-Transparent-Logo-250x250-1.png.webp" 
                  alt="fishing shirts now logo"
                  width={209}
                  height={5}
                />
              </div>
              {/* Menu Items */}
              <div className="hidden space-x-7 items-center md:flex">
                <a href="#" className="text-lightWhite active:text-white hover:text-white ">Home</a>
                <a href="#" className="text-lightWhite hover:text-white">Store</a>
                <a href="#" className="text-lightWhite hover:text-white">Blog</a>
                {/* Button */}
                <form className="flex items-center">   
                  <label htmlFor="voice-search" className="sr-only">Search</label>
                  <div className=" relative w-full">
                      <input type="text" name="s" id="voice-search" tabIndex="-1" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark focus:border-dark block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-lightWhite dark:focus:ring-dark dark:focus:border-dark" placeholder="Quick search..." required/>
                      <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-lightWhite" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                      </button>
                  </div>
                  <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-lightWhite rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:dark:focus:ring-white">
                      <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </form>
              </div>
              {/* Hamburger Icon */}
              <button 
                id="menu-btn" 
                className={`${isActive === true ? "open" : null} block hamburger md:hidden focus:outline-none`}
                onClick={mobileMenu} 
                >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <div id="menu" className={`absolute flex flex-col items-center self-end ${isActive === true ? null : "hidden"} py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                <a href="#">Home</a>
                <a href="#">Store</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </nav>
      </header>
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
        <Image
            src="/ocean-1950583_1280.jpg"
            alt="Fisherman holding fishing rod"
            fill                   
            priority            
            className="object-cover brightness-75"
        />
        </div>
        {/* Flex Container */}
        {/* container flex flex-col-reverse items-center px-6 mx-auto md:flex-row */}
        <div className="container flex items-center mx-auto h-4/6">
            {/* Left Item */}
            <div className="flex flex-col items-center md:items-start">
                <h1 className="max-w-lg mb-5 text-5xl font-black text-center leading-loose text-white md:text-left">
                    Fishing Shirts Deals You Do Not Want To Miss Today!
                </h1>
                <p className="hidden max-w-sm mb-5  text-center text-white leading-loose md:text-left md:block">
                    We help you find the best fishing shirts at affordable prices that are carefully selected for you. All sizes, colors, and textures in stock right now. We stand by the quality of our products.
                </p>
                {/* Button */}
                <button className="w-48 p-3 px-6 pt-2 bg-white text-lg text-black font-bold hover:text-white hover:bg-transparent hover:border-white-700 border-2 flex items-center md:text-left" type="button">
                    <FaTshirt className="mr-3"/>
                    Learn More
                </button>
            </div>
        </div>
    </section>
  )
}

export default Banner




