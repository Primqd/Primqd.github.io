import { Link } from "react-router-dom";
import debugNavbarArt from "../assets/debug_navbar_art.png"
import "../index.css";

{/* <p className="text-blue-600/100 dark:text-sky-400/100 bg-gray-800 p-2">The quick brown fox...</p>
<p className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">The quick brown fox...</p> */}

const liStyle = "";
const buttonStyle = "z-1 w-[25vw] h-[4vh] text-white transition duration-300 hover:bg-gray-600 active:bg-gray-400";

function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="h-[4vh] overflow-hidden flex relative items-center justify-center mx-auto"> {/* top header stuff*/}
                <img className="" src={debugNavbarArt} alt="generic navbar art"/>
                <Link to="/" className="z-1 text-[3vh] absolute text-center -top-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-white to-blue-700 font-bold">Franklin Chen</Link>
            </div>
            <div className="h-[4vh] max-w-screen flex p-0">
                <ul className="flex w-full items-center">
                    <li className={liStyle}>
                        <Link to="/">
                            <input className={buttonStyle} type="button" value="Home" />
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link to="/games">
                            <input className={buttonStyle} type="button" value="Games" />
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link to="/projects">
                            <input className={buttonStyle} type="button" value="Projects" />
                        </Link>
                    </li>
                    <li className={buttonStyle}>
                        <Link to="/about">
                            <input className={buttonStyle} type="button" value="About" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;