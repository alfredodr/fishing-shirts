import React from "react"
import Link from "next/link"

const Categories = ({category}) => {
  return (
    <div className="p-5 flex flex-col">
        <Link href={`product-category/${category.slug}/`} passHref>
            <div className="overflow-hidden">
                <img 
                  src={category.image.src}
                  alt={category.image.alt}
                />
            </div>
        </Link>
        <Link href={`/${category.slug}`} passHref className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
            <h2 className="sm:text-sm">{category.name}</h2>
            <h3 className="sm:text-sm">{category.count} Products</h3>
        </Link>
        <span className="mt-2 text-slate-500 text-sm">{category.name}</span>
    </div>
  )
}

export default Categories
