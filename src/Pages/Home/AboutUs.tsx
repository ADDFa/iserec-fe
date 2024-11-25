import {
    Accordion,
    Col,
    Container,
    Image,
    ListGroup,
    Row
} from "react-bootstrap"
import aboutUs from "Images/about-us.jpg"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEnvelope,
    faLocation,
    faPhone
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"

const AboutUs = () => {
    const { t } = useTranslation()

    const backgroundList = ["1", "2", "3", "4"]
    const educationList = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
    const technologyList = ["a", "b"]
    const advisoryList = ["a"]

    return (
        <section id="about-us" className="py-5 mt-2 px-3 bg-cornsilk">
            <Container className="pb-5">
                <Row xs={1} lg={2} className="g-3">
                    <Col className="order-2 order-lg-1">
                        <div className="position-relative w-fit">
                            <Image src={aboutUs} alt="About Us" rounded />

                            <div className="contact bg-gun-metal text-light position-absolute">
                                <h5 className="roboto-black">
                                    {t("about-us.welcome")}
                                </h5>

                                <div className="mt-3 d-flex gap-3 text-sm">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <Link
                                        to="https://wa.me"
                                        target="_blank"
                                        className="text-light text-decoration-none"
                                    >
                                        +62 803 021 011
                                    </Link>
                                </div>
                                <div className="mt-3 d-flex gap-3 text-sm">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <Link
                                        to="mailto:iserec@gmail.com"
                                        className="text-light text-decoration-none"
                                    >
                                        iserec@gmail.com
                                    </Link>
                                </div>
                                <div className="mt-3 d-flex gap-3 text-sm">
                                    <FontAwesomeIcon icon={faLocation} />
                                    <Link
                                        to="https://maps.app.goo.gl/n2GK8ZSajHxFVbYU8"
                                        className="text-light text-decoration-none"
                                        target="_blank"
                                    >
                                        Graha Rekayasa Indonesia, Jl. Halimun
                                        Raya No.39 7, RT.8/RW.2, Guntur,
                                        Kecamatan Setiabudi, Kota Jakarta
                                        Selatan, Daerah Khusus Ibukota Jakarta
                                        12980
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="order-1 order-lg-2">
                        <h3 className="roboto-black">
                            {t("about-us.about-us")}
                        </h3>

                        <Accordion className="mt-4" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    {t("about-us.about-us-list.background")}
                                </Accordion.Header>
                                <Accordion.Body className="text-justify">
                                    {backgroundList.map((indicator) => (
                                        <p key={indicator}>
                                            {t(
                                                `about-us.background.paragraph-${indicator}`
                                            )}
                                        </p>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    {t("about-us.about-us-list.objective")}
                                </Accordion.Header>
                                <Accordion.Body className="text-justify">
                                    <p>{t("about-us.objective.intro")}</p>

                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="roboto-black">
                                                    {t(
                                                        "about-us.objective.education"
                                                    )}
                                                </div>
                                                <ol type="A">
                                                    {educationList.map(
                                                        (indicator) => (
                                                            <li key={indicator}>
                                                                {t(
                                                                    `about-us.objective.education-list.${indicator}`
                                                                )}
                                                            </li>
                                                        )
                                                    )}
                                                </ol>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="roboto-black">
                                                    {t(
                                                        "about-us.objective.technology"
                                                    )}
                                                </div>
                                                <ol type="A">
                                                    {technologyList.map(
                                                        (indicator) => (
                                                            <li key={indicator}>
                                                                {t(
                                                                    `about-us.objective.technology-list.${indicator}`
                                                                )}
                                                            </li>
                                                        )
                                                    )}
                                                </ol>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="roboto-black">
                                                    {t(
                                                        "about-us.objective.advisory"
                                                    )}
                                                </div>
                                                <ol type="A">
                                                    {advisoryList.map(
                                                        (indicator) => (
                                                            <li key={indicator}>
                                                                {t(
                                                                    `about-us.objective.advisory-list.${indicator}`
                                                                )}
                                                            </li>
                                                        )
                                                    )}
                                                </ol>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs
