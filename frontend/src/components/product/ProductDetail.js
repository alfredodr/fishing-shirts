import React from "react"
import Link from "next/link"
import Variants from "./Variants"

const ProductDetail = ({product}) => {
  return (
    <section className="bg-lightGray py-28"> 
        <div className="relative flex md:flex-row sm:flex-col container mx-auto">
        <div className="md:w-1/2">
            <div className="overflow-hidden">
                <img
                    src={product.images[0].src}
                    alt={product.name}
                    className="w-full"
                />
                {/* Variants*/}
                {product.images.length > 1 && 
                    <div className="container flex flex-row gap-5 flex-1 my-10">
                    {product.images.slice(1).map((image, index)=>(         
                        <Variants key={index} image={image}/>
                    ))}     
                    </div>
                }
            </div>     
        </div>
        <div className="md:ml-20 lg:md-20">
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <h1>{product.name}</h1>
            {product.price===1 ? <p className="mt-2 font-bold text-red-700">Currently unavailable</p> : 
                <p className="text-2xl">
                    Amazon.com Price: ${product.price} (as of {new Date().toLocaleDateString() + ""}
                ) </p>
            }
        </div>
    </div>
    <div className="container mx-auto ">
        <p className="mt-2 text-slate-500 text-base">
          Categories: {product.categories.map((category) => category.name).join(", ")}
        </p>
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



