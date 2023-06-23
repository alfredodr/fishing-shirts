import React from "react";
import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GTM}');`}
      </Script>
      <Script
        data-account="qWhiPoBCq6"
        src="https://cdn.userway.org/widget.js"
      ></Script>
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
    </>
  );
};

export default App;
