import Head from "next/head"
import React, {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fishingshirtsnow.com/"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Fishing Shirts Now - UV Protection - High Quality - Affordable Prices"/>
        <meta property="og:description" content="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."/>
        <meta property="og:url" content="https://fishingshirtsnow.com/"/>
        <meta property="og:site_name" content="Fishing Shirts Now"/>
      </Head>

      <header className={`${router.pathname === "/" ? "bg-lightBlack" : "bg-white"} absolute top-0 w-full z-10`}>
        {/* Navbar */}
          <nav className="container mx-auto flex items-center justify-between">
            {/* Flex container */}
              {/* Logo */}
              <Link href="/" className={`${router.pathname === "/" && "w-40"}`}>
                <Image 
                  src={router.pathname === "/" ? "/FSN-Transparent-Logo-250x250-1.png.webp" : "/fsn-black-logo.webp"}
                  alt="fishing shirts now logo"
                  width={209}
                  height={5}
                />
              </Link>
              {/* Menu Items */}
              <div className="hidden space-x-7 items-center md:flex">
                <Link href="/" className={`${router.pathname === "/" ? "text-lightWhite" : "text-black"}`}>Home</Link>
                <Link href="#" className={`${router.pathname === "/" ? "text-lightWhite" : "text-black"}`}>Store</Link>
                <Link href="#" className={`${router.pathname === "/" ? "text-lightWhite" : "text-black"}`}>Blog</Link>
                {/* Button */}
                <form className="flex items-center">   
                  <label htmlFor="voice-search" className="sr-only">Search</label>
                  <div className=" relative w-full">
                      <input type="text" name="s" id="voice-search" tabIndex="-1" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark focus:border-dark block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-lightWhite dark:focus:ring-dark dark:focus:border-dark" placeholder="Quick search..." required/>
                      <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-lightWhite" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                      </button>
                  </div>
                  <button type="submit" className={`"inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium ${router.pathname === "/" ? "text-lightWhite" : "text-black"} rounded-lg ${router.pathname === "/" && "hover:text-white"}  focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:dark:focus:ring-white"`}>
                      <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </form>
              </div>
              {/* Hamburger Icon */}
              <button 
                id="menu-btn" 
                className= "flex items-center justify-center cursor-pointer hamburger relative w-8 h-8 md:hidden focus:outline-none bg-lightBlue rounded"
                onClick={mobileMenu} 
                >
                {isActive===true ? <RxCross1/> : <RxHamburgerMenu/>}
              </button>
          </nav>
           {/* Mobile Menu */}
           <div className={`${isActive === true ? null : "hidden"} md:hidden w-full bg-lightGray"`} >
              <div id="menu" className="flex flex-col font-bold bg-lightGray divide-y divide-slate-300">
                <div className="py-4"><Link href="/" className="mx-10">Home</Link></div>
                <div className="py-4"><Link href="#" className="mx-10">Store</Link></div>
                <div className="py-4"><Link href="#" className="mx-10">Blog</Link></div>  
                <div className="py-4">
                  <form className="flex items-center mx-10">   
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
              </div>
            </div>
      </header>
    </>
  )
}

export default Header















