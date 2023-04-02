import React from "react"
import Link from "next/link"
import Image from "next/image"

const Categories = ({category}) => {
  return (
      <section className="flex flex-col">
        <Link className="hover:no-underline hover:cursor-pointer" href={`product-category/${category.slug}/`} passHref>
          <div className="relative w-48 h-48 overflow-hidden">
              <Image 
                src={category.image.src}
                alt={category.image.alt}  
                fill
                  sizes="(max-width: 768px) 192px,
                  (max-width: 1200px) 192px,
                  33vw"
                priority 
                className="object-center"           
              />
              <span className="absolute left-4 right-4 bottom-4 text-center z-50 text-lg bg-white bg-opacity-80 font-medium mt-8">
                <p className="sm:text-sm">{(category.name).toUpperCase()}</p>
                <mark className="sm:text-sm">{category.count} PRODUCTS</mark>
              </span>
          </div>   
        </Link>
      </section>
  )
}

export default Categories





