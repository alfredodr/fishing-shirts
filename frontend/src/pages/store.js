import React from "react"
import axios from "axios"
import Categories from "@/components/product/Categories"
import StoreProducts from "@/components/product/StoreProducts"

const store = ({products, categories}) => {
    return (
        <section id="features" className="flex flex-row sm:flex-row items-center justify-center container mx-auto my-24">
            {/* Filter */}
            <div>
                <h2>Filter by price</h2>
            </div>
            <div>
                <p>Welcome to our fishing shirts store where you will find a huge variety of elegant high performance options. Take a look around and you will find different fabric and styles, vivid graphics with high visibility, which is important out there in the sea. Looking for sun protective clothing? We have you covered, our long sleeve collection has the highest rated picks chosen by our clients. We are constantly updating our catalog following your feedback, to keep only the best shirts in the market right now. Navigate our store to find the best sellers or browse by categories: men, women, kids, fun collection, and even shop by brand: Hanes, Columbia, Koofin and more. Finally don’t forget to leave your feedback, we are always open to any suggestions to improve our content to make it more valuable for you.</p>
                {/* Grid */}
                <div className="w-4/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 my-5">
                     {/* Categories */}
                        {categories?.map((category, index)=>(         
                            <Categories key={index} category={category}/>
                        ))}                
                 </div>
                {/* Grid */}
                <div className="w-4/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 my-5">
                     {/* Product */}
                        {products?.map((product, index)=>(         
                            <StoreProducts key={index} product={product}/>
                        ))}                
                </div>
            </div>
        </section>
      )
    }

export default store

export async function getStaticProps(){
  const {data:products}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
  const {data:categories}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);
    
  return {
    props:{products,categories},
    revalidate:10
  }
}









