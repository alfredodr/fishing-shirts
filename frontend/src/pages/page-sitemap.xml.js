function generateSiteMap(posts) {
  return `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://fishingshirtsnow.com/</loc>
		<lastmod>2021-01-16T04:25:05+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/about/</loc>
		<lastmod>2021-03-04T02:34:10+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/terms-conditions/</loc>
		<lastmod>2021-03-04T02:37:50+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/fishingshirtsnow-com-sitemap/</loc>
		<lastmod>2021-04-16T16:13:51+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/accessibility/</loc>
		<lastmod>2021-04-20T14:47:29+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/store/</loc>
		<lastmod>2021-05-11T22:07:14+00:00</lastmod>
	</url>
	<url>
		<loc>https://fishingshirtsnow.com/contact-us/</loc>
		<lastmod>2021-06-16T02:29:31+00:00</lastmod>
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
