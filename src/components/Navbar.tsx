import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import "../index.css";

const liStyle = "w-1/4";
const buttonStyle = "z-1 h-full w-full text-[1.2rem] text-text-highlight dark:text-dark-text-highlight transition duration-300 hover:bg-button-hover dark:hover:bg-dark-button-hover active:bg-button-click dark:active:bg-dark-button-click";

// TODO: apply custom style to navbar links
export const WebsiteNavbar: React.FC = () => {
    const location = useLocation();

    return (
        <Navbar fluid rounded className="bg-secondary dark:bg-dark-secondary z-50 w-[100%] fixed top-0">
            <NavbarBrand>
                <Link
                    to='/'
                    className="self-center whitespace-nowrap text-xl font-semibold text-text-highlight dark:text-dark-text-highlight">
                    franklinvc.com
                </Link>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <Link to="/">
                    <NavbarLink active={location.pathname === '/'} as='div'>
                        Home
                    </NavbarLink>
                </Link>
                <Link to="/games">
                    <NavbarLink active={location.pathname === '/games'} as='div'>
                        Games
                    </NavbarLink>
                </Link>
                <Link to="/projects">
                    <NavbarLink active={location.pathname === '/projects'} as='div'>
                        Projects
                    </NavbarLink>
                </Link>
                <Link to="/about">
                    <NavbarLink active={location.pathname === '/about'} as='div'>
                        About
                    </NavbarLink>
                </Link>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Navbar;