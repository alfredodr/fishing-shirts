import React from "react";

const Blog = () => {
  return (
    <section className="bg-lightGray">
        <h2 className="text-center font-bold text-4xl pt-10">Latest Articles</h2>
        <hr className="mt-10 bg-black w-1/12 border-2 border-solid mx-auto"/>
        <div className="flex items-center justify-center container mx-auto m-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 mx-5">
                {/* Card */}
                <div className="shadow-lg bg-white">
                        <div className="overflow-hidden">
                        <img 
                          src="/ocean-1950583_1280.jpg"
                          alt="Fisherman holding fishing rod"
                        />
                        </div>
                    <div className="p-5 flex flex-col">
                        <h4 className="text-2xl md:text-3xl font-medium mt-3">Fishing Shirts For Men</h4>
                        <p className="text-slate-500 text-lg mt-3">For those of you who love fishing like me, we can all agree that one of the most important parts in the art of fishing is the...</p>
                        <a href="#" className="text-lg mt-3">READ MORE</a>
                        <hr className="m-1"/>
                        <div className="flex flex-row gap-1 text-slate-500">
                            <span>December 21, 2019</span>
                            <span>-</span>
                            <span>No Comments</span>
                        </div>
                    </div>
                </div>
                {/* Card 2*/}
                <div className="shadow-lg bg-white">
                        <div className="overflow-hidden">
                        <img 
                          src="/ocean-1950583_1280.jpg"
                          alt="Fisherman holding fishing rod"
                        />
                        </div>
                    <div className="p-5 flex flex-col">
                        <h4 className="text-2xl md:text-3xl font-medium mt-3">Fishing Shirts For Men</h4>
                        <p className="text-slate-500 text-lg mt-3">For those of you who love fishing like me, we can all agree that one of the most important parts in the art of fishing is the...</p>
                        <a href="#" className="text-lg mt-3">READ MORE</a>
                        <hr className="m-1"/>
                        <div className="flex flex-row gap-1 text-slate-500">
                            <span>December 21, 2019</span>
                            <span>-</span>
                            <span>No Comments</span>
                        </div>
                    </div>
                </div>
                {/* Card 3*/}
                <div className="shadow-lg bg-white">
                        <div className="overflow-hidden">
                            <img 
                              src="/ocean-1950583_1280.jpg"
                              alt="Fisherman holding fishing rod"
                            />
                        </div>
                    <div className="p-5 flex flex-col">
                        <h4 className="text-2xl md:text-3xl font-medium mt-3">Fishing Shirts For Men</h4>
                        <p className="text-slate-500 text-lg mt-3">For those of you who love fishing like me, we can all agree that one of the most important parts in the art of fishing is the...</p>
                        <a href="#" className="text-lg mt-3">READ MORE</a>
                        <hr className="m-1"/>
                        <div className="flex flex-row gap-1 text-slate-500">
                            <span>December 21, 2019</span>
                            <span>-</span>
                            <span>No Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog