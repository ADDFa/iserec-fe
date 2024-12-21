import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "antd"
import mouWithCtis from "data/news/mou-with-ctis.jpg"
import peresmian from "data/news/peresmian.jpg"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const News = () => {
    const { t } = useTranslation()

    const data = [
        {
            title: t("news.news-1.title"),
            img: mouWithCtis,
            date: t("news.news-1.date"),
            desc: t("news.news-1.desc")
        },
        {
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

                <Row xs={1} lg={3} className="justify-content-center g-3">
                    {data.map(({ img, date, title, desc }, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Body>
                                    <img
                                        src={img}
                                        alt={date}
                                        height={70}
                                        className="rounded"
                                    />

                                    <h6 className="mt-3 roboto-black">
                                        {title}
                                    </h6>
                                    <p className="text-md text-justify">
                                        {desc}
                                    </p>

                                    <div className="d-flex gap-2 justify-content-end align-items-center">
                                        <span className="text-sm text-secondary">
                                            {date}
                                        </span>
                                        <Link
                                            target="_blank"
                                            to={`/news/${title}`}
                                        >
                                            <FontAwesomeIcon icon={faShare} />
                                        </Link>
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
