import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap"
import SelectLanguage from "Layouts/HomeLayout/Components/SelectLanguage"
import logo from "assets/logo.png"
import { useTranslation } from "react-i18next"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <BootstrapNavbar expand="lg" className="sticky-top bg-light shadow-sm">
            <Container fluid>
                <a href="/#home" className="navbar-brand">
                    <img src={logo} alt="ISEREC" width={100} />
                </a>
                <BootstrapNavbar.Toggle aria-controls="homeNavbar" />
                <BootstrapNavbar.Collapse id="homeNavbar">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
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
                    </Nav>
                    <SelectLanguage />
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
