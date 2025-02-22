import { Link } from "react-router-dom";
import debugNavbarArt from "../assets/debug_navbar_art.png"
import "../index.css";

{/* <p className="text-blue-600/100 dark:text-sky-400/100 bg-gray-800 p-2">The quick brown fox...</p>
<p className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">The quick brown fox...</p> */}

const buttonStyle = "text-white";

function Navbar() {
    return (
        <nav className="bg-gray-800 border-gray-700">
            <div className="h-8 overflow-hidden flex relative items-center justify-center mx-auto"> {/* top header stuff*/}
                <img className="" src={debugNavbarArt} alt="generic navbar art"/>
                <Link to="/" className="font-semibold absolute text-center top-0 z-1 text-white">frankvc.com</Link>
            </div>
            <div className="max-w-screen flex p-2 content-center">
                <ul className="flex w-full justify-evenly items-center">
                    <li className={buttonStyle}>
                        <Link to="/">
                            <input type="button" value="Home" />
                        </Link>
                    </li>
                    <li className={buttonStyle}>
                        <Link to="/games">
                            <input type="button" value="Games" />
                        </Link>
                    </li>
                    <li className={buttonStyle}>
                        <Link to="/projects">
                            <input type="button" value="Projects" />
                        </Link>
                    </li>
                    <li className={buttonStyle}>
                        <Link to="/about">
                            <input type="button" value="About" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;