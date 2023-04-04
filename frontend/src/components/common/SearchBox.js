import React, {useState} from "react"
import { useRouter } from "next/router";

const SearchBox = () => {
    const [keyword, setKeyword]=useState("");
    const router=useRouter();

    const submitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            router.push(`/search/?s=${keyword}`)
        }else{
            router.push("/")
        }
    }
  return (
    <form onSubmit={submitHandler} className="flex items-center mx-10">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className=" relative w-full">
            <input type="text" id="s" value={keyword} name="s" onChange={(e)=>setKeyword(e.target.value)} placeholder="Search Products..." tabIndex="-1" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark focus:border-dark block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-lightWhite dark:focus:ring-dark dark:focus:border-dark" required/>
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-lightWhite" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        <button type="submit" className={`"inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium ${router.pathname === "/" ? "text-lightWhite" : "text-black"} rounded-lg ${router.pathname === "/" && "hover:text-white"}  focus:ring-4 focus:outline-none focus:ring-white dark:bg-white dark:hover:dark:focus:ring-white"`}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
    </form>
  )
}

export default SearchBox



