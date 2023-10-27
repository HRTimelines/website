import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thank you for submitting!</title>
        <meta name="description" content="HRT reasearch form submission page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="border-2 border-solid border-solid border-black p-4">
          Thank you for submitting
        </div>
        <Link href="/">Back</Link>
      </main>
    </>
  );
}
