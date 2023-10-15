import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {

  return (
    <>
      <Head>
        <title>forg</title>
        <meta name="description" content="a questions about frogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="border-black border-solid p-4 border-solid border-2">
          Thank you for submitting
        </div>
        <Link href="/">Back</Link>
      </main>
    </>
  );
}
