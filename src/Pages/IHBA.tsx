import { Fragment } from "react"
import indroyonoSoesilo from "assets/images/ihba/indroyono-soesilo.jpg"
import liChunAn from "assets/images/ihba/li-chun-an.png"
import edwinKhew from "assets/images/ihba/edwin-khew.png"
import { useTranslation } from "react-i18next"

const ihba = [
    {
        name: "Prof. Dr. Indroyono Soesilo",
        picture: indroyonoSoesilo,
        desc_key: "ihba.indroyono_soesilo_desc"
    },
    {
        name: "Li Chun An",
        position: "ihba.li_chun_an_position",
        picture: liChunAn,
        desc_key: "ihba.li_chun_an_desc"
    },
    {
        name: "Er. Edwin Khew PBM",
        position: "ihba.edwin_khew_position",
        picture: edwinKhew,
        desc_key: "ihba.edwin_khew_desc"
    }
]

const IHBA = () => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <h3 className="text-center fw-bold my-5">
                {t("home-navbar.ihba")}
            </h3>

            <div className="container ihba">
                {ihba.map(({ name, position, picture, desc_key }, i) => (
                    <Fragment key={i}>
                        <div className="row g-3">
                            <div className="col-lg-3">
                                <img
                                    alt={name}
                                    src={picture}
                                    className="w-100 rounded-3 ihba-people-picture"
                                />
                            </div>
                            <div className="col-lg-8">
                                <h3 className="fw-bold">{name}</h3>
                                {position && (
                                    <h5
                                        dangerouslySetInnerHTML={{
                                            __html: t(position)
                                        }}
                                    ></h5>
                                )}

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t(desc_key)
                                    }}
                                ></div>
                            </div>
                        </div>
                        <hr className="my-5" />
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
}

export default IHBA
