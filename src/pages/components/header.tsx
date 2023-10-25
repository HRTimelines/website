import Image from "next/image"
import logo from "../../../public/fillerLogo.png"

export const Header = () => {
    return(
        <>
            <header className="bg-gradient-to-tr from-[#5BCEFA] to-[#F5A9B8] via-purple-400 z-{999} justify-center display-block w-screen h-24">
                <div className="header flex justify-center max-h-full">
                    <div className="logo inline justify-center text-center h-24">
                        <Image src={logo} alt="logo" className="rounded-full max-h-full w-auto" />
                    </div>
                    <div className="title inline">
                        <h1>HRTimelines</h1>
                    </div>
                    <div className="inline">
                        <ul className="nav-links">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Form</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}