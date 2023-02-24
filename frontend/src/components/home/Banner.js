import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    // Banner Section
    <section id="home-banner">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* Left Item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-lg text-6xl font-black text-center md:text-5xl md:leading-relaxed text-white md:text-left">
                    Fishing Shirts Deals You Do Not Want To Miss Today!
                </h1>
                <p className="hidden max-w-sm text-center text-white text-2xl md:text-left md:block">
                    We help you find the best fishing shirts at affordable prices that are carefully selected for you. All sizes, colors, and textures in stock right now. We stand by the quality of our products.
                </p>
                {/* Button */}
                <button className="p-3 px-6 pt-2 bg:white text-white hover:text-textLightGray md:text-left" type="button">
                    Learn More
                </button>
            </div>
            <div className="w-100vw h-100vh -z-50">
                <Image
                    src="/ocean-1950583_1280.jpg"
                    alt="Fisherman holding fishing rod"
                    fill
                    priority
                    className="brightness-50"
                />
            </div>
        </div>
    </section>
  )
}

export default Banner