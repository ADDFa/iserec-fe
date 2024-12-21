import {
    Navbar as BootstrapNavbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap"
import SelectLanguage from "Layouts/HomeLayout/Components/SelectLanguage"
import { useTranslation } from "react-i18next"
import { MouseEventHandler } from "react"
import Logo100 from "Components/Logo100"

const Navbar = () => {
    const { t } = useTranslation()

    const handleNavClick: MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault()

        if (!(e.target instanceof HTMLAnchorElement)) return

        if (e.target.role !== "button") {
            e.currentTarget.querySelector(".active")?.classList.remove("active")
            e.target.classList.add("active")
        }

        const idTarget = e.target.hash.substring(1)
        const viewTarget = document.getElementById(idTarget)
        if (!viewTarget) return

        const offset = 100
        const elementPosition = viewTarget.offsetTop
        const offsetPosition = elementPosition - offset

        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }

    return (
        <BootstrapNavbar
            expand="lg"
            className="sticky-top bg-body shadow-sm py-3"
        >
            <Container fluid>
                <a
                    href="/#home"
                    className="navbar-brand d-flex gap-2 align-items-center"
                >
                    <Logo100 width={50} className="rounded-pill" />
                    <span className="roboto-black text-indigo">ISEREC</span>
                </a>
                <BootstrapNavbar.Toggle aria-controls="homeNavbar" />
                <BootstrapNavbar.Collapse id="homeNavbar">
                    <Nav
                        className="my-2 my-lg-0 w-100 justify-content-center gap-4 roboto-black"
                        navbarScroll
                        onClick={handleNavClick}
                    >
                        <NavDropdown
                            title={t("home-navbar.about-iserec")}
                            id="about-iserec"
                        >
                            <NavDropdown.Item href="#about-us">
                                {t("home-navbar.introduction")}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                {t("home-navbar.ihba")}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#organization">
                                {t("home-navbar.organization")}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#working-group">
                                {t("home-navbar.working-group")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">
                            {t("home-navbar.publications")}
                        </Nav.Link>
                        <NavDropdown title={t("home-navbar.event-and-courses")}>
                            <NavDropdown.Item>
                                {t("home-navbar.event")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {t("home-navbar.courses")}
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
