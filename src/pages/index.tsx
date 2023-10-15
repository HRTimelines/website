import { contextProps } from "@trpc/react-query/shared";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";

export default function Home() {

  const [opinion, setOpinion] = useState("")
  const [name, setName] = useState("")  

  const { mutate }= api.submit.create.useMutation({
    onSuccess: () => {
      setOpinion("")
      setName("")
    }
  })

  return (
    <>
      <Head>
        <title>forg</title>
        <meta name="description" content="a questions about frogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="border-black border-solid p-4 border-solid border-2">
          <form>
            <label htmlFor="opinionQuestion">How do you feel about frogs?</label><br />
            <input 
              type="text" 
              id="opinionQuestion" 
              className="border-solid border-black border-2" 
              value={ opinion } 
              onChange={(e) => setOpinion(e.target.value)} 
            />
            <br/><br/>

            <label htmlFor="nameQuestion" >What is your name</label><br />
            <input 
              type="text" 
              id="nameQuestion" 
              className="border-solid border-black border-2" 
              value={ name } 
              onChange={(e) => setName(e.target.value)}/><br /><br />

            <button type="button" className="border-solid border-black border-2 p-1" onClick={() => mutate({name: name, opinion: opinion})}>Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
