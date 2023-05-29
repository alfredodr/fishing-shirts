import axios from "axios";

function generateSiteMap(categories) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${categories
        ?.map(({ slug, updatedAt, image }) => {
          return `
          <url>
               <loc>https://fishingshirtsnow.com/${slug}</loc>
               <lastmod>${updatedAt}</lastmod>
               <image:image>
                   <image:loc>${image.src}</image:loc>
                 </image:image>
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
  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
  );

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(categories);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { categories },
  };
}

export default SiteMap;
