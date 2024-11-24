import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import News from "./Components/News"
import { Divider } from "antd"

const Program = () => {
    const { t } = useTranslation()

    return (
        <section id="program" className="py-5">
            <Container>
                <h3 className="roboto-black">{t("program-and-news")}</h3>

                <Row xs={1} lg={2}>
                    <Col xs={12} lg={9} className="text-justify">
                        <p>{t("program.p-1")}</p>
                        <p>{t("program.p-2")}</p>
                        <p>{t("program.p-3")}</p>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Divider>
                            <span className="text-gun-metal roboto-black">
                                NEWS
                            </span>
                        </Divider>
                        <News />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Program
