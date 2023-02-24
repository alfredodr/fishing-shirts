import Head from "next/head"
import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fishingshirtsnow.com/"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Fishing Shirts Now - UV Protection - High Quality - Affordable Prices"/>
        <meta property="og:description" content="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."/>
        <meta property="og:url" content="https://fishingshirtsnow.com/"/>
        <meta property="og:site_name" content="Fishing Shirts Now"/>
  </Head>
    <header className="bg-lightBlack">
      {/* Navbar */}
        <nav className="relative container mx-auto p-6">
          {/* Flex container */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
              <Image src="/FSN-Transparent-Logo-250x250-1.png.webp" alt="fishing shirts now logo" width={109} height={30}/>
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
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-lightWhite rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:dark:focus:ring-white">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </form>
            </div>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header


{/* <a href="#" className="hidden p-3 px-6 pt-2 text-secondaryPaleBlack rouded-full baseline hover:text-white md:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 text-lightWhite">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
              </a> */}





