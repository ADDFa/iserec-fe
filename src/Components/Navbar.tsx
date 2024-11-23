import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap"
import SelectLanguage from "Components/SelectLanguage"
import logo from "assets/logo.png"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <BootstrapNavbar expand="lg" className="sticky-top bg-light shadow-sm">
            <Container fluid>
                <Link to="/#home" className="navbar-brand">
                    <img src={logo} alt="ISEREC" width={100} />
                </Link>
                <BootstrapNavbar.Toggle aria-controls="homeNavbar" />
                <BootstrapNavbar.Collapse id="homeNavbar">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="#about-us">
                            {t("home-navbar.about-us")}
                        </Nav.Link>
                        <Nav.Link href="#structure">
                            {t("home-navbar.structure")}
                        </Nav.Link>
                        <Nav.Link href="#member">
                            {t("home-navbar.members")}
                        </Nav.Link>
                        <Nav.Link href="#news">
                            {t("home-navbar.news")}
                        </Nav.Link>
                        <Nav.Link href="#partner">
                            {t("home-navbar.partners")}
                        </Nav.Link>
                        <Nav.Link href="#project">
                            {t("home-navbar.project")}
                        </Nav.Link>
                    </Nav>
                    <SelectLanguage />
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
