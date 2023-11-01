import { contextProps } from "@trpc/react-query/shared";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";
import { MainForm } from "./mainForm";
import { MilestonesForm } from "./components/majorMilestonesForm";
import Header from "./components/header";
import {
  Contact,
  Creators,
  Description,
  Plans,
  Timelines,
} from "./components/text";

export default function Home() {
  // const [dateOfBirth, setDateOfBirth] = useState("")

  // const { mutate } = api.form.create.useMutation({
  //   onSuccess: () => {
  //     setDateOfBirth("")
  //   }
  // })

  return (
    <>
      <main className="block flex flex-col justify-center">
        <Header />
        <Description />

        <Creators />
        <Timelines />
        <Plans />
        <Contact />
      </main>
    </>
  );
}
