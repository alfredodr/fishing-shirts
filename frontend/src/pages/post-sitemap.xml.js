function generateSiteMap(posts) {
  return `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/</loc>
		<lastmod>2022-12-19T22:32:35+00:00</lastmod>
	</url>
	<url>
		<loc>${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you/</loc>
		<lastmod>2020-09-24T01:57:43+00:00</lastmod>
	</url>
	<url>
		<loc>${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/fishing-shirts-men/</loc>
		<lastmod>2021-05-12T02:25:00+00:00</lastmod>
	</url>
	<url>
		<loc>${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/funny-fishing-shirts-that-put-a-smile-on-your-face/</loc>
		<lastmod>2022-12-19T22:32:35+00:00</lastmod>
	</url>
</urlset>
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
