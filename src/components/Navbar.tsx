import { Link, useLinkClickHandler } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import "../index.css";

const liStyle = "w-1/4";
const buttonStyle =
    "z-1 h-full w-full text-[1.2rem] text-text-highlight dark:text-dark-text-highlight transition duration-300 hover:bg-button-hover dark:hover:bg-dark-button-hover active:bg-button-click dark:active:bg-dark-button-click";

export const WebsiteNavbar: React.FC = () => {
    return (
        <Navbar fluid rounded className="bg-secondary dark:bg-dark-secondary z-50 h-[5rem] w-[100%] fixed top-0">
            <NavbarBrand>
                <Link
                    to='/'
                    className="self-center whitespace-nowrap text-xl font-semibold text-text-highlight dark:text-dark-text-highlight">

                    franklinvc.com
                </Link>
            </NavbarBrand>
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
        </Navbar>
    )
}

export default Navbar;