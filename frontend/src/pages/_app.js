import React from "react"
import "@/styles/globals.css";
import Layout from "@/components/common/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;


