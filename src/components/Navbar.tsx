import { Link } from "react-router-dom";
import navbarArt from "../assets/amethyst-navbar.jpg";
import "../index.css";

{/* <p className="text-blue-600/100 dark:text-sky-400/100 bg-neutral-800 p-2">The quick brown fox...</p>
<p className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">The quick brown fox...</p> */}

const liStyle = "w-1/4";
const buttonStyle = "z-1 h-full w-full text-[1.2rem] text-text-highlight transition duration-300 hover:bg-button-hover active:bg-button-click"; //border-b-4 border-neutral-800

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-secondary z-50 h-[5rem] w-[100%] fixed top-0">
            <div className="h-1/2 w-full overflow-hidden relative flex"> {/* top header stuff*/}
                <img className="absolute h-full w-full object-none z-0" src={navbarArt} alt="generic navbar art" />
                <div className="flex w-full items-center justify-center">
                    <Link to="/" className="absolute h-full text-[2rem] flex items-center justify-center z-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-white to-purple-500 font-bold">Franklin Chen</Link>
                </div>
            </div>
            <div className="h-1/2 w-full flex">
                <ul className="h-full w-full flex">
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
                    <li className={liStyle}>
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