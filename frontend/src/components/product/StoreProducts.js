import React from "react"
import Rating from "./Rating"
import Link from "next/link"
import Image from "next/image"

const StoreProducts = ({product}) => {
  return (
    <div className="flex flex-col">
        <Link href={`/products/${product.slug}`} passHref>
            <div className="relative w-48 h-48 overflow-hidden">
                <Image 
                  src={product.images[0].src}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 192px,
                  (max-width: 1200px)192px,
                  33vw"
                  priority 
                  className="object-center"   
                />
            </div>
        </Link>
        <Link href={`/products/${product.slug}`} passHref className="text-lg font-medium mt-8">
            <h2 className="sm:text-sm">{product.name}</h2>
        </Link>
        <span className="mt-2 text-slate-500 text-sm">{product.category}</span>
        <span className="mt-2 text-sm">
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </span>
        {product.price===1 ? <p className="mt-2 font-bold text-red-700">Currently unavailable</p> : <span className="mt-2 font-bold">${product.price}</span>}
    </div>
  )
}

export default StoreProducts


















