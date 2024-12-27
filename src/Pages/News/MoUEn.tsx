import { Col, Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Fragment } from "react/jsx-runtime"
import mou from "assets/images/news/mou.jpg"

const MoUEn = () => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <h2 className="roboto-black my-3 text-center">
                {t("news.news-2.title")}
            </h2>
            <hr />

            <Col xs={12} lg={7} className="mx-auto">
                <Image src={mou} rounded thumbnail className="w-100" />
            </Col>
        </Fragment>
    )
}

export default MoUEn
