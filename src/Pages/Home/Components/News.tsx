import { List } from "antd"
import mouWithCtis from "data/news/mou-with-ctis.jpg"
import peresmian from "data/news/peresmian.jpg"
import { Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const News = () => {
    const { t } = useTranslation()

    const data = [
        {
            title: t("news.news-1.title"),
            img: mouWithCtis,
            date: t("news.news-1.date")
        },
        {
            title: t("news.news-2.title"),
            img: peresmian,
            date: t("news.news-2.date")
        }
    ]

    return (
        <div>
            <List
                size="large"
                dataSource={data}
                renderItem={({ title, img, date }) => (
                    <List.Item
                        extra={
                            <Image
                                src={img}
                                thumbnail
                                className="w-50"
                                alt={title}
                            />
                        }
                    >
                        <div>
                            <h6 className="roboto-black text-indigo">
                                {title}
                            </h6>
                            <h6 className="text-muted">{date}</h6>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default News
