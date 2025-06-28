import { Link, useLinkClickHandler, useLocation } from "react-router-dom";
import { createTheme, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";
import "../index.css";
import { PropsWithChildren } from "react";

const NavbarTheme = createTheme({
    navbar: {
        brand: {
            base: "p-1"
        },
        link: {
            base: "block text-base font-normal p-1 md:pr-4 bg-secondary md:bg-secondary dark:md:bg-dark-secondary dark:bg-dark-secondary",
            active: {
                on: "text-text-highlight md:text-text-highlight bg-secondary dark:text-dark-text-highlight",
                off: "text-text-default md:text-text-default hover:text-button-hover md:hover:text-button-hover dark:hover:text-dark-button-hover md:dark:hover:text-dark-button-hover dark:text-dark-text-default"
            }
        }
    }
})

// custom component for reactnavlink to preserve react router property
type ReactNavLinkProps = {
    to: string;
    className?: string
}

const ReactNavLink: React.FC<PropsWithChildren<ReactNavLinkProps>> = ({ to, className, children }) => {
    const clickHandler = useLinkClickHandler(to);
    const location = useLocation();

    return <NavbarLink href={to} active={location.pathname == to}>
        <span className={className} onClick={clickHandler}>
            {children}
        </span>
    </NavbarLink>
};

// TODO: apply custom style to navbar links
export const WebsiteNavbar: React.FC = () => {

    return (
        <ThemeProvider theme={NavbarTheme}>
            <Navbar fluid rounded className="bg-secondary dark:bg-dark-secondary z-50 min-w-screen fixed top-0">
                <NavbarBrand>
                    <ReactNavLink className={"self-center whitespace-nowrap text-xl font-semibold text-text-highlight dark:text-dark-text-highlight"} to="/">
                        franklinvc.com
                    </ReactNavLink>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <ReactNavLink to="/">Home</ReactNavLink>
                    <ReactNavLink to="/games">Games</ReactNavLink>
                    <ReactNavLink to="/projects">Projects</ReactNavLink>
                    <ReactNavLink to="/about">About</ReactNavLink>
                </NavbarCollapse>
            </Navbar>
        </ThemeProvider>
    )
}

export default Navbar;