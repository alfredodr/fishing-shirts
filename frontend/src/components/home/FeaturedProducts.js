import React from "react"

const FeaturedProducts = () => {
  return (
    <>
    {/* Features Section */}
    <section id="features">
        <h2 className="text-center font-bold text-4xl mt-10">Featured Products</h2>
        <hr className="mt-10 bg-black w-1/12 border-2 border-solid mx-auto"/>
        <div className="flex items-center justify-center container mx-auto m-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-5 mx-5">
                {/* Product 1 */}
                <div>
                    <div className="p-5 flex flex-col">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                        <h2 className="text-lg font-medium mt-8">BALEAF Men’s Long Sleeve Hoodie Shirts UPF 50+ UV Sun Protection Fishing Running SPF Shirt with Mask Lightweight</h2>
                        <span className="mt-2 text-slate-500 text-sm">Fishing Shirts Face Mask</span>
                        <span className="mt-2 font-bold">$27.99</span>
                    </div>
                </div>
                {/* Product 2 */}
                <div>
                    <div className="p-5 flex flex-col">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                        <h2 className="text-lg font-medium mt-8">Coolibar UPF 50+ Men’s Andros Fishing Hoodie – Sun Protective</h2>
                        <span className="mt-2 text-slate-500 text-sm">Fishing Shirts Face Mask</span>
                        <span className="mt-2 font-bold">$79.00</span>
                    </div>
                </div>
                {/* Product 3 */}
                <div>
                    <div className="p-5 flex flex-col">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                        <h2 className="text-lg font-medium mt-8">Coolibar UPF 50+ Kids’ Andros Fishing Hoodie – Sun Protective</h2>
                        <span className="mt-2 text-slate-500 text-sm">Fishing Shirts Face Mask</span>
                        <span className="mt-2 font-bold">$55.00</span>
                    </div>
                </div>
                {/* Product 4 */}
                 <div>
                    <div className="p-5 flex flex-col">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                        <h2 className="text-lg font-medium mt-8">Performance Fishing Hoodie with Face Mask Hooded Sunblock Shirt Sun Shield Long Sleeve UPF50 Dry Fit Quick-Dry</h2>
                        <span className="mt-2 text-slate-500 text-sm">Fishing Shirts Face Mask</span>
                        <span className="mt-2 font-bold">$25.99</span>
                    </div>
                </div>
                {/* Product 5 */}
                <div>
                    <div className="p-5 flex flex-col">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                        <h2 className="text-lg font-medium mt-8">Salty Crew Tailed Hood Fleece</h2>
                        <span className="mt-2 text-slate-500 text-sm">Fishing Shirts Face Mask</span>
                        <span className="mt-2 font-bold">$61.69</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>    
  )
}

export default FeaturedProducts














