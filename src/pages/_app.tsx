import { AppType } from "next/app";
import { httpLink } from "@trpc/client";
import { withTRPC } from "@trpc/next";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>HRTimelines</title>
        <meta name="description" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
