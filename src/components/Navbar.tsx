import { Link, useLocation } from "react-router-dom";
import { createTheme, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";
import "../index.css";

const NavbarTheme = createTheme({
    navbar: {
        brand: {
            base: "p-2"
        },
        link: {
            base: "block text-base font-normal p-2 md:pr-4 bg-secondary md:bg-secondary dark:md:bg-dark-secondary dark:bg-dark-secondary",
            active: {
                on: "text-text-highlight md:text-text-highlight bg-secondary dark:text-dark-text-highlight",
                off: "text-text-default md:text-text-default hover:text-button-hover md:hover:text-button-hover dark:hover:text-dark-button-hover md:dark:hover:text-dark-button-hover dark:text-dark-text-default"
            }
        }
    }
})

// TODO: apply custom style to navbar links
export const WebsiteNavbar: React.FC = () => {
    const location = useLocation();

    return (
        <ThemeProvider theme={NavbarTheme}>
            <Navbar fluid rounded className="bg-secondary dark:bg-dark-secondary z-50 min-w-screen fixed top-0">
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
        </ThemeProvider>
    )
}

export default Navbar;