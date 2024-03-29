function generateSiteMap() {
  return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
      <loc>https://fishingshirtsnow.com/post-sitemap.xml</loc>
      <lastmod>2022-12-19T22:32:35+00:00</lastmod>
  </sitemap>
  <sitemap>
      <loc>https://fishingshirtsnow.com/page-sitemap.xml</loc>
      <lastmod>2021-06-16T02:29:31+00:00</lastmod>
  </sitemap>
  <sitemap>
      <loc>https://fishingshirtsnow.com/product-sitemap.xml</loc>
      <lastmod>2023-04-11T02:12:33+00:00</lastmod>
  </sitemap>
  <sitemap>
      <loc>https://fishingshirtsnow.com/product_cat-sitemap.xml</loc>
      <lastmod>2023-04-11T02:12:33+00:00</lastmod>
  </sitemap>
</sitemapindex>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
