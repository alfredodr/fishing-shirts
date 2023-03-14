import React from "react"
import Link from "next/link"
import Variants from "./Variants"

const ProductDetail = ({product}) => {
  return (
    <section > 
        <div className="relative flex md:flex-row sm:flex-col container mx-auto my-24 ">
        <div className="md:w-1/2 lg:w-1/2">
            <div className="overflow-hidden">
                <img
                    src={product.images[0].src}
                    alt={product.name}
                    className="w-full"
                />
                {/* Variants*/}
                {product.images.length > 1 && 
                    <div className="container flex flex-row gap-5 flex-1 my-10">
                    {product.images.map((image, index)=>(         
                        <Variants key={index} image={image}/>
                    ))}     
                    </div>
                }
            </div>     
        </div>
        <div className="w-1/2 md:ml-20 lg:md-20">
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    </div>
    <div className="container mx-auto ">
        <ul className="mt-2 text-slate-500 text-base" >Categories: 
            {product.categories.map((category,index)=>
            <li key={index}>{category.name}</li>
            )}
        </ul>
        <hr className="m-1"/>                  
        <p className="text-lg font-medium mt-8 hover:underline hover:underline-offset-1">
            Description
        </p>
        <p className="text-lg mt-8">
            {product.description}
        </p>
    </div>        
    </section>
  )
}

export default ProductDetail



