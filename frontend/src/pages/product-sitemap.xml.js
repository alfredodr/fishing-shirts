import axios from "axios";

function generateSiteMap(products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${products
    ?.map(({ slug, updatedAt, images }) => {
      return `
      <url>
           <loc>${`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${slug}`}</loc>
           <lastmod>${`${updatedAt}`}</lastmod>
           ${
             images &&
             images
               .map(({ src }) => {
                 return `
             <image:image>
               <image:loc>${`${src}`}</image:loc>
             </image:image>
         `;
               })
               .join("")
           }
       </url>
  `;
    })
    .join("")}
</urlset>
`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const {
    data: { products },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(products);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { products },
  };
}

export default SiteMap;