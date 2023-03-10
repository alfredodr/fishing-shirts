import React, { useState } from "react"
import Image from "next/image"
import { FaTshirt } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {

  
  return (
    // Banner Section
    <section id="home-banner" className="relative w-screen h-screen flex items-center justify-center">
        
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
        <div className="container mt-32 flex items-center mx-auto h-4/6">
            {/* Left Item */}
            <div className="flex flex-col items-center md:items-start">
                <h1 className="max-w-lg mb-4 text-5xl font-black text-center text-white md:text-left">
                    Fishing Shirts Deals You Do Not Want To Miss Today!
                </h1>
                <p className="hidden max-w-sm mb-4 text-center text-white md:text-left md:block">
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




