import React from "react";
import Link from "next/link";
import Image from "next/image";

const latestArticles = ({ posts }) => {
  return (
    <section className="bg-lightGray">
      <h2 className="text-center font-bold text-4xl pt-10">Latest Articles</h2>
      <hr className="mt-10 bg-black w-1/12 border-2 border-solid mx-auto" />
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 mx-5">
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div className="shadow-md hover:shadow-xl bg-white ">
                <Link href={`/blog/${post.slug}/`} passHref>
                  <div className="overflow-hidden">
                    <Image
                      className="img-fluid"
                      src={post.frontmatter.cover_image}
                      alt={post.frontmatter.title}
                      width={500}
                      height={400}
                    />
                  </div>
                </Link>
                <div className="p-5 flex flex-col">
                  <Link href={`/blog/${post.slug}/`} passHref>
                    <h4 className="text-2xl md:text-3xl font-medium mt-3">
                      {post.frontmatter.title}
                    </h4>
                  </Link>
                  <p className="text-slate-500 text-lg mt-3">
                    {post.frontmatter.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-lg mt-3"
                    passHref
                  >
                    Read More »
                  </Link>
                  <hr className="m-1" />
                  <div className="flex flex-row gap-1 text-slate-500">
                    <span>{post.frontmatter.date}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default latestArticles;
