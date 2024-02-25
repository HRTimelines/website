import { contextProps } from "@trpc/react-query/shared";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";
import { MainForm } from "./components/mainForm";
import { MilestonesForm } from "./components/majorMilestonesForm";
import Header from "./components/header";
import {
  Contact,
  Creators,
  Description,
  GoToForm,
  Plans,
} from "./components/text";

export default function Home() {
  return (
    <>
      <main className="block flex flex-col justify-center">
        <Header />
        <div className="w-5/6 mx-auto main">
          <Description />
          <GoToForm />
          <Creators />
          <Plans />
          <Contact />
        </div>
      </main>
    </>
  );
}
