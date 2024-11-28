import {
    Navbar as BootstrapNavbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap"
import SelectLanguage from "Layouts/HomeLayout/Components/SelectLanguage"
import logo from "assets/logo.png"
import { useTranslation } from "react-i18next"
import { MouseEventHandler } from "react"

const Navbar = () => {
    const { t } = useTranslation()

    const handleNavClick: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault()

        if (!(e.target instanceof HTMLAnchorElement)) return

        const idTarget = e.target.hash.substring(1)
        const viewTarget = document.getElementById(idTarget)
        if (!viewTarget) return

        const offset = 100
        const elementPosition = viewTarget.offsetTop
        console.log(elementPosition)
        const offsetPosition = elementPosition - offset

        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }

    return (
        <BootstrapNavbar
            expand="lg"
            className="sticky-top bg-body shadow-sm py-3"
        >
            <Container fluid>
                <a href="/#home" className="navbar-brand">
                    <img src={logo} alt="ISEREC" width={200} />
                </a>
                <BootstrapNavbar.Toggle aria-controls="homeNavbar" />
                <BootstrapNavbar.Collapse id="homeNavbar">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                        onClick={handleNavClick}
                    >
                        <Nav.Link href="#about-us">
                            {t("home-navbar.about-us")}
                        </Nav.Link>
                        <Nav.Link href="#structure">
                            {t("home-navbar.structure")}
                        </Nav.Link>
                        <Nav.Link href="#working-group">
                            {t("home-navbar.working-group")}
                        </Nav.Link>
                        <Nav.Link href="#program">
                            {t("home-navbar.program")}
                        </Nav.Link>
                        <Nav.Link href="#news">
                            {t("home-navbar.news")}
                        </Nav.Link>
                        <NavDropdown
                            title={t("home-navbar.courses")}
                            id="courses"
                        >
                            <NavDropdown.Item>
                                {t("home-navbar.courses-list.education")}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <SelectLanguage />
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
