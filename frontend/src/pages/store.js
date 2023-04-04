import React, {useState} from "react"
import axios from "axios"
import Categories from "@/components/product/Categories"
import StoreProducts from "@/components/product/StoreProducts"
import FilterByPrice from "@/components/product/FilterByPrice"
import Paginate from "@/components/common/Paginate"

const store = ({products, page, pages, keyword, categories}) => {
    const initialMin=0;
    const initialMax=100;
    const [minPrice, setMinPrice]=useState(initialMin);
    const [maxPrice, setMaxPrice]=useState(initialMax);
    
    return (
        <section id="features" className="flex flex-row justify-center container mx-auto my-24">
            <FilterByPrice 
                min={0} 
                max={100}
                step={1}
                initialMin={initialMin}
                initialMax={initialMax}
                priceCap={10} 
                minPrice={minPrice} 
                maxPrice={maxPrice} 
                setMinPrice={setMinPrice} 
                setMaxPrice={setMaxPrice}
            />
            <hr className="rotate-90 w-10  invisible md:visible lg:visible bg-textLightGray"/>
            <div className="w-4/5">
                <p>Welcome to our fishing shirts store where you will find a huge variety of elegant high performance options. Take a look around and you will find different fabric and styles, vivid graphics with high visibility, which is important out there in the sea. Looking for sun protective clothing? We have you covered, our long sleeve collection has the highest rated picks chosen by our clients. We are constantly updating our catalog following your feedback, to keep only the best shirts in the market right now. Navigate our store to find the best sellers or browse by categories: men, women, kids, fun collection, and even shop by brand: Hanes, Columbia, Koofin and more. Finally don’t forget to leave your feedback, we are always open to any suggestions to improve our content to make it more valuable for you.</p>
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-10">
                     {/* Categories */}
                        {categories?.map((category, index)=>(         
                            <Categories key={index} category={category}/>
                        ))}                
                 </div>
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-32">
                    {/* Product */}
                    { products.filter( product => { return product.price >= minPrice && product.price <= maxPrice }).map( (product,index) => {
                      return <StoreProducts key={index} product={product} keyword={keyword ? keyword : ""}/>
                    })}               
                </div>
                <Paginate page={page} pages={pages} keyword={keyword ? keyword : ""}/>
            </div>
        </section>
      )
    }

export default store

export async function getServerSideProps(context){
  const { query } = context;
  const keyword = query.s || "";
  const pageNumber=query.pageNumber || 1;
  const {data:allProducts}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
  const {data:categories}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);
  const{products, page, pages}=allProducts;

  return {
    props:{products, page, pages, keyword, categories}
  }
}









