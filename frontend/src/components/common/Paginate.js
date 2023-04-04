import React from "react"
import Link from "next/link"

const Paginate = ({pages, page, isAdmin=false, keyword=""}) => {
  return pages > 1 && (
    <div className="flex bg-white rounded-lg">       
            {[...Array(pages).keys()].map((x,index)=>(
                <Link 
                    key={index} 
                    href={keyword ? `/search?s=${keyword}&pageNumber=${x+1}` : `?pageNumber=${x+1}`} 
                    className={`h12 border-2 border-lightGray w-12 px-4  ${ x+1 === page ? "bg-black text-white" : "bg-white"}`}
                >
                    {x+1}
                </Link>
            ))}
    </div>
  )
}

export default Paginate









