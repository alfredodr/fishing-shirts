import React from "react"
import Rating from "./Rating"
import Link from "next/link"

const Product = ({product}) => {
  return (
    <div className="p-5 flex flex-col shadow-lg">
        <Link href={`/products/${product.slug}`} passHref>
            <div className="overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                />
            </div>
        </Link>
        <Link href={`/products/${product.slug}`} passHref className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
            <h2>{product.name}</h2>
        </Link>
        <span className="mt-2 text-slate-500 text-sm">{product.category}</span>
        <span className="mt-2 text-sm">
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </span>
        <span className="mt-2 font-bold">${product.price}</span>
    </div>
  )
}

export default Product