import { Col, Container, Image, Row } from "react-bootstrap"
import aboutUs from "Images/about-us.png"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEnvelope,
    faLocation,
    faPhone
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import logo from "assets/logo.png"

const AboutUs = () => {
    const { t } = useTranslation()

    const characteristics = ["1", "2"]
    const educations = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const technologies = ["1", "2"]

    return (
        <section id="about-us" className="py-5 mt-2 px-3">
            <Container>
                <Row xs={1} lg={2} className="g-3">
                    <Col className="col-12 col-lg-5 order-4 order-lg-1 px-lg-5 contact-container">
                        <Image
                            src={logo}
                            alt="ISEREC"
                            className="w-100 border p-2 mb-4"
                            rounded
                        />

                        <div className="position-relative">
                            <Image
                                src={aboutUs}
                                alt="About Us"
                                className="w-100"
                                rounded
                            />

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

                    <Col className="col-12 col-lg-7 order-1 order-lg-2 mb-4">
                        <h3 className="roboto-black mb-4">
                            {t("home-navbar.introduction")}
                        </h3>

                        <h6 className="roboto-black">
                            PII AND E20 (ENGINEERING 20)
                        </h6>
                        <p className="text-justify">
                            {t("about-us.pii-and-e20.p1")}
                        </p>
                        <p>{t("about-us.pii-and-e20.p2")}</p>
                        <ol className="text-justify">
                            {characteristics.map((val) => (
                                <li key={val}>
                                    {t(
                                        `about-us.pii-and-e20.e-20-characteristics-${val}`
                                    )}
                                </li>
                            ))}
                        </ol>
                        <p className="text-justify">
                            {t("about-us.pii-and-e20.p3")}
                        </p>
                        <p className="text-justify">
                            {t("about-us.pii-and-e20.p4")}
                        </p>
                        <p className="text-justify">
                            {t("about-us.pii-and-e20.p5")}
                        </p>
                        <p className="text-justify">
                            {t("about-us.pii-and-e20.p6")}
                        </p>
                    </Col>

                    <Col className="order-2 order-lg-3">
                        <h6 className="roboto-black">
                            {t("about-us.background-iserec.title")}
                        </h6>
                        <p
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: t("about-us.background-iserec.p1")
                            }}
                        />
                        <p
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: t("about-us.background-iserec.p2")
                            }}
                        />
                        <p className="text-justify">
                            {t("about-us.background-iserec.p3")}
                        </p>
                        <p className="text-justify">
                            {t("about-us.background-iserec.p4")}
                        </p>
                    </Col>
                    <Col className="order-3 order-lg-4">
                        <h6 className="roboto-black">
                            {t("about-us.objective-iserec.title")}
                        </h6>
                        <p className="text-justify">
                            {t("about-us.objective-iserec.p1")}
                        </p>

                        <ol className="roboto-black text-justify">
                            <li>
                                {t("about-us.objective-iserec.education")}

                                <ol type="a" className="roboto-regular">
                                    {educations.map((val) => (
                                        <li key={val}>
                                            {t(
                                                `about-us.objective-iserec.education-${val}`
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </li>

                            <li>
                                {t("about-us.objective-iserec.technology")}

                                <ol
                                    type="a"
                                    className="roboto-regular text-justify"
                                >
                                    {technologies.map((val) => (
                                        <li key={val}>
                                            {t(
                                                `about-us.objective-iserec.technology-${val}`
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </li>

                            <li>
                                {t("about-us.objective-iserec.advisor")}

                                <ol
                                    type="a"
                                    className="roboto-regular text-justify"
                                >
                                    <li>
                                        {t(
                                            "about-us.objective-iserec.advisor-1"
                                        )}
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs
