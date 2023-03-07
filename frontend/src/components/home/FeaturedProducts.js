import React from "react"
import Product from "../product/Product";

const FeaturedProducts = ({products}) => {

  return (
    <>
    {/* Features Section */}
    <section id="features">
        <h2 className="text-center font-bold text-4xl p-10">Featured Products</h2>
        <hr className="mt-10 bg-black w-1/12 border-2 border-solid mx-auto"/>
        <div className="flex items-center justify-center container mx-auto m-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-5 mx-5">
                 {/* Product */}
                    {products.map(product=>(         
                        <Product key={product._id} product={product}/>
                    ))}                
            </div>
        </div>
    </section>
    </>    
  )
}

export default FeaturedProducts














