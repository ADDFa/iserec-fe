import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoTwo from "Components/LogoTwo"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const Footer = () => {
    const { t } = useTranslation()

    return (
        <section id="footer" className="py-5 bg-indigo text-light">
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5 m-0">
                    <Col className="text-center">
                        <LogoTwo className="w-75" />
                    </Col>
                    <Col>
                        <h6 className="roboto-black mb-4">{t("contact")}</h6>

                        <Row xs={2} className="g-3">
                            <Col xs={2} className="text-center">
                                <FontAwesomeIcon icon={faPhone} />
                            </Col>
                            <Col xs={10}>
                                <Link
                                    to="https://wa.me"
                                    target="_blank"
                                    className="text-light text-decoration-none"
                                >
                                    +62 878 8731 6662
                                </Link>
                            </Col>
                            <Col xs={2} className="text-center">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Col>
                            <Col xs={10}>
                                <Link
                                    to="mailto:iserec@gmail.com"
                                    className="text-light text-decoration-none"
                                >
                                    admin@iserec.org
                                </Link>
                            </Col>
                            {/* <Col xs={2} className="text-center">
                                <i className="bi bi-instagram"></i>
                            </Col>
                            <Col xs={10}>
                                <Link
                                    to="https://instagram.com"
                                    target="_blank"
                                    className="text-light text-decoration-none"
                                >
                                    _iserec
                                </Link>
                            </Col>
                            <Col xs={2} className="text-center">
                                <i className="bi bi-twitter-x"></i>
                            </Col>
                            <Col xs={10}>
                                <Link
                                    to="https://twitter.com"
                                    target="_blank"
                                    className="text-light text-decoration-none"
                                >
                                    iserec
                                </Link>
                            </Col>
                            <Col xs={2} className="text-center">
                                <i className="bi bi-youtube"></i>
                            </Col>
                            <Col xs={10}>
                                <Link
                                    to="https://youtube.com"
                                    target="_blank"
                                    className="text-light text-decoration-none"
                                >
                                    iserec
                                </Link>
                            </Col> */}
                        </Row>
                    </Col>
                    <Col>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4196063951713!2d106.8328329!3d-6.2082549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40e358e8625%3A0x1ec752ed144c880!2sPersatuan%20Insinyur%20Indonesia!5e0!3m2!1sid!2sid!4v1732450967071!5m2!1sid!2sid"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            height={240}
                            className="w-100"
                        />

                        <p className="mb-0 text-sm text-justify">
                            Graha Rekayasa Indonesia, 6th Floor. Jl. Halimun
                            Raya No.39, RT.8/RW.2, Guntur, Kecamatan Setiabudi,
                            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                            12980
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
