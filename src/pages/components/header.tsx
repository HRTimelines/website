import Image from "next/image";
import logo from "../../../public/Logo-transparent-small.png";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="z-999 display-block top-0 fixed h-24 w-screen justify-center bg-gradient-to-tr from-[#5BCEFA] via-purple-400 to-[#F5A9B8]">
        <div className="header flex max-h-full justify-center">
          <div className="logo inline h-24 justify-center text-center">
            <Image
              src={logo}
              alt="logo"
              className="max-h-full w-auto rounded-full"
            />
          </div>
          <div className="title inline">
            <h1>HRTimelines</h1>
          </div>
          <div className="inline">
            <ul className="nav-links">
              <li><Link href="\">Home</Link></li>
              <li><Link href="\aboutUs">About Us</Link></li>
              <li><Link href="\form">Form</Link></li>
              <li>
                <Link href="\contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
