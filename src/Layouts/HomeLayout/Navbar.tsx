import {
    Navbar as BootstrapNavbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap"
import SelectLanguage from "Layouts/HomeLayout/Components/SelectLanguage"
import { useTranslation } from "react-i18next"
import Logo100 from "Components/Logo100"
import DropdownItem from "./Components/DropdownItem"
import { NavLink } from "react-router"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <BootstrapNavbar
            expand="lg"
            className="sticky-top shadow-sm py-3"
            bg="jasmine"
        >
            <Container fluid>
                <NavLink
                    to="/"
                    className="navbar-brand d-flex gap-2 align-items-center"
                >
                    <Logo100 width={50} className="rounded-pill" />
                    <span className="roboto-black text-indigo">ISEREC</span>
                </NavLink>
                <BootstrapNavbar.Toggle aria-controls="homeNavbar" />
                <BootstrapNavbar.Collapse id="homeNavbar">
                    <Nav
                        className="my-2 my-lg-0 w-100 justify-content-center gap-4 roboto-black fs-4"
                        navbarScroll
                    >
                        <NavDropdown
                            title={t("home-navbar.about-iserec")}
                            id="about-iserec"
                        >
                            <DropdownItem href="/introduction">
                                {t("home-navbar.introduction")}
                            </DropdownItem>
                            <DropdownItem href="#">
                                {t("home-navbar.ihba")}
                            </DropdownItem>
                            <DropdownItem href="/organization">
                                {t("home-navbar.organization")}
                            </DropdownItem>
                            <DropdownItem href="/working-group">
                                {t("home-navbar.working-group")}
                            </DropdownItem>
                        </NavDropdown>
                        <NavLink to="/publication" className="nav-link">
                            {t("home-navbar.publications")}
                        </NavLink>
                        <NavDropdown title={t("home-navbar.event-and-courses")}>
                            <DropdownItem href="/event">
                                {t("home-navbar.event")}
                            </DropdownItem>
                            <DropdownItem href="/course">
                                {t("home-navbar.courses")}
                            </DropdownItem>
                        </NavDropdown>
                    </Nav>
                    <SelectLanguage />
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
