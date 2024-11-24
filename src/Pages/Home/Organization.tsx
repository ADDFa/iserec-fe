import { Card, Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import manVector from "Images/man-vector.jpg"

const Organization = () => {
    const { t } = useTranslation()

    return (
        <section id="structure" className="py-5">
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
                                    <Card.Img src={manVector} />
                                    <Card.Footer>Er. Edwin Khew</Card.Footer>
                                </Card>
                            </Col>
                            <Col className="col-12 col-md-8 mx-auto">
                                <Card className="text-center">
                                    <Card.Img src={manVector} />
                                    <Card.Footer>
                                        Dr. Ir. Danis Hidayat Sumadilaga
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
                                            <Card.Img src={manVector} />
                                            <Card.Footer>
                                                Prof. Armin Aberle
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={manVector} />
                                            <Card.Footer>
                                                Dr. Ir. Andhika Prastawa,
                                                M.SEE., IPU
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
                                            <Card.Img src={manVector} />
                                            <Card.Footer>
                                                Dr. Thomas Reindl
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col className="col-12 col-md-8 mx-auto">
                                        <Card className="text-center">
                                            <Card.Img src={manVector} />
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

                {/* <Row xs={1} lg={2} className="align-items-center">
                    <Col lg={8} className="order-2 order-lg-1">
                        <Row xs={1} md={2}>
                            <Col>
                                <Image
                                    src={manVector}
                                    className="w-75"
                                    thumbnail
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={womanVector}
                                    className="w-75"
                                    thumbnail
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="order-1 order-lg-2">
                        <h1 className="roboto-black">
                            DEWAN <br /> PENASEHAT
                        </h1>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row xs={1} lg={2} className="align-items-center mt-3">
                    <Col lg={4}>
                        <h1 className="roboto-black text-end">
                            PEMIMPIN <br /> BERSAMA
                        </h1>
                    </Col>
                    <Col lg={8}>
                        <Row xs={1} md={2}>
                            <Col>
                                <Image
                                    src={manVector}
                                    className="w-75"
                                    thumbnail
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={womanVector}
                                    className="w-75"
                                    thumbnail
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}

export default Organization
