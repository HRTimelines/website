import Head from "next/head";
import Link from "next/link";
import toast from "react-hot-toast";

import { api } from "~/utils/api";
import Header from "./components/header";

function copy(text: string) {
  void navigator.clipboard.writeText(text);
  toast.success("copied to clipboard");
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Header />
        <div className="p-5 text-center">
          Thank you for submitting! If you would like to get in contact, please
          reach out via email{" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            (<u>hrtimelines@gmail.com</u>)
          </button>{" "}
          or on instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>
          </a>
          .
        </div>
        <Link href="/">
          <u>Back to home</u>
        </Link>
      </main>
    </>
  );
}
