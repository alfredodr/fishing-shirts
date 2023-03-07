import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestArticles from "@/components/home/LatestArticles";
import Features from "@/components/home/Features";
import axios from "axios";

export default function Home({data}) {
  return (
    <>
        <Banner/>
        <FeaturedProducts products={data}/>
        <LatestArticles/>
        <Features/>
    </>
  ) 
}

export async function getStaticProps(){
  const {data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
    
  return {
    props:{data}
  }
}

















































