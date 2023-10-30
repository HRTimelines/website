import { AppType } from "next/app";
import { httpLink } from "@trpc/client";
import { withTRPC } from "@trpc/next";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
