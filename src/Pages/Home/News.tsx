import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "antd"
import mouWithCtis from "data/news/mou-with-ctis.jpg"
import peresmian from "data/news/peresmian.jpg"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router"

const News = () => {
    const { t } = useTranslation()

    const data = [
        {
            name: "launching",
            title: t("news.news-1.title"),
            img: mouWithCtis,
            date: t("news.news-1.date"),
            desc: t("news.news-1.desc")
        },
        {
            name: "mou",
            title: t("news.news-2.title"),
            img: peresmian,
            date: t("news.news-2.date"),
            desc: t("news.news-2.desc")
        }
    ]

    return (
        <section id="news" className="bg-cornsilk py-5">
            <Container>
                <Divider>
                    <h2 className="text-center roboto-black">NEWS</h2>
                </Divider>

                <Row xs={1} lg={2} className="justify-content-center g-3">
                    {data.map(({ name, img, date, title, desc }, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Body>
                                    <Card.Img
                                        src={img}
                                        alt={date}
                                        height={210}
                                        className="w-fit mx-auto"
                                    />

                                    <h5 className="mt-3 roboto-black">
                                        {title}
                                    </h5>
                                    <p className="text-justify">{desc}</p>

                                    <div className="d-flex gap-2 justify-content-end align-items-center">
                                        <span className="text-sm text-secondary">
                                            {date}
                                        </span>
                                        <NavLink to={`/news/${name}`}>
                                            <FontAwesomeIcon icon={faShare} />
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default News
