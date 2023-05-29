import React from "react";
import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import { DefaultSeo } from "next-seo";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Fishing Shirts Now",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
