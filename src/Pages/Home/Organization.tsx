import { Card, Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import andhika from "Images/organisation-structure/Dr. Ir. Andhika Prastawa.jpg"
import danis from "Images/organisation-structure/Dr. Ir. Danis Hidayat Sumadilaga, M.Eng.Sc., IPU., ACPE., APEC Eng..jpg"
import thomas from "Images/organisation-structure/Dr. Thomas Reindl (3).jpg"
import edwin from "Images/organisation-structure/Er. Edwin Khew.jpg"
import armin from "Images/organisation-structure/Prof. Armin  Aberle (2).jpg"
import michael from "Images/organisation-structure/Prof. Michael Goutama.jpg"

const Organization = () => {
    const { t } = useTranslation()

    return (
        <section id="organization" className="py-5">
            <Container>
                <h3 className="roboto-black">{t("organization")}</h3>
                <hr className="mb-lg-4" />

                <Card className="border-indigo">
                    <Card.Body>
                        <Card.Title className="text-center text-gun-metal roboto-black">
                            {t("organization-structure.board-of-advisor")}
                        </Card.Title>
                        <hr className="text-gun-metal" />

                        <Row
                            className="text-center g-3 col-lg-8 mx-auto"
                            xs={1}
                            lg={2}
                        >
                            <Col className="col-12 col-md-8 mx-auto">
                                <Card className="text-center">
                                    <Card.Img src={edwin} />
                                    <Card.Footer>Er. Edwin Khew</Card.Footer>
                                </Card>
                            </Col>
                            <Col className="col-12 col-md-8 mx-auto">
                                <Card className="text-center">
                                    <Card.Img src={danis} />
                                    <Card.Footer>
                                        Dr. Danis Hidayat Sumadilaga
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>

                        <Row xs={1} md={2}>
                            <Col>
                                <hr className="text-gun-metal mt-5" />
                                <Card.Title className="text-center text-gun-metal roboto-black">
                                    {t("organization-structure.co-chairs")}
                                </Card.Title>
                                <hr className="text-gun-metal" />
                                <Row className="text-center g-3" xs={1} lg={2}>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={armin} />
                                            <Card.Footer>
                                                Prof. Armin Aberle
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={andhika} />
                                            <Card.Footer>
                                                Dr. Ir. Andhika Prastawa
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <hr className="text-gun-metal mt-5" />
                                <Card.Title className="text-center text-gun-metal roboto-black">
                                    {t("organization-structure.co-ceo")}
                                </Card.Title>
                                <hr className="text-gun-metal" />
                                <Row className="text-center g-3" xs={1} lg={2}>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={thomas} />
                                            <Card.Footer>
                                                Dr. Thomas Reindl
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={michael} />
                                            <Card.Footer>
                                                Prof. Michael Goutama
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default Organization
