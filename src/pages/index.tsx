import { contextProps } from "@trpc/react-query/shared";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";
import { Form } from "./form";

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
      <main /*className="flex min-h-screen flex-col items-center justify-center"*/>
        <Form />
      </main>
    </>
  );
}
