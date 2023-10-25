import { contextProps } from "@trpc/react-query/shared";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";
import { MainForm } from "./mainForm";
import { MilestonesForm } from "./majorMilestonesForm";
import { Header } from "./components/header";

export default function Home() {

  // const [dateOfBirth, setDateOfBirth] = useState("")

  // const { mutate } = api.form.create.useMutation({
  //   onSuccess: () => {
  //     setDateOfBirth("")
  //   }
  // })

  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="description" content="HRT research form" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex justify-center">
        <Header />
        {/* <MilestonesForm /> */}
      </main>
    </>
  );
}
