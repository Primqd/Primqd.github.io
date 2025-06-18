import { Link } from "react-router-dom";
import navbarArt from "../assets/amethyst-navbar.jpg";
import "../index.css";

const liStyle = "w-1/4";
const buttonStyle =
    "z-1 h-full w-full text-[1.2rem] text-text-highlight dark:text-dark-text-highlight transition duration-300 hover:bg-button-hover dark:hover:bg-dark-button-hover active:bg-button-click dark:active:bg-dark-button-click";

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-secondary dark:bg-dark-secondary z-50 h-[5rem] w-[100%] fixed top-0">
            <div className="h-1/2 w-full overflow-hidden relative flex">
                {/* top header stuff*/}
                <img
                    className="absolute h-full w-full object-none z-0"
                    src={navbarArt}
                    alt="generic navbar art"
                />
                <div className="flex w-full items-center justify-center">
                    <Link
                        to="/"
                        className="absolute h-full text-[2rem] flex items-center justify-center z-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-white to-purple-500 dark:from-dark-purple-500 dark:via-dark-white dark:to-dark-purple-500 font-bold"
                    >
                        Franklin Chen
                    </Link>
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