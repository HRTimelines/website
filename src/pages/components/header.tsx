import Image from "next/image";
import logo from "../../../public/Logo - transparent.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="z-999 display-block mb-30 fixed top-0 h-24 w-screen justify-center bg-gradient-to-tr from-[#5BCEFA] via-purple-200 to-[#F5A9B8]">
        <div className="header flex flex h-full items-center justify-center">
          <div className="logo inline h-24 h-4/5 w-auto justify-center text-center ">
            <Image
              src={logo}
              alt="logo"
              className="max-h-full w-auto rounded-full"
            />
          </div>
          <div className="title inline">
            <h1>
              <Link href="/">HRTimelines</Link>
            </h1>
          </div>
          <div className="inline">
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/formCoverPage">Form</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
