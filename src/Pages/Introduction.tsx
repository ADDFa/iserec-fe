import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Introduction = () => {
    const { t } = useTranslation()

    const characteristics = ["1", "2"]
    const educations = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const technologies = ["1", "2"]

    return (
        <Container className="py-3">
            <h3 className="roboto-black">PII AND E20 (ENGINEERING 20)</h3>
            <p className="text-justify">{t("about-us.pii-and-e20.p1")}</p>
            <p>{t("about-us.pii-and-e20.p2")}</p>
            <ol className="text-justify">
                {characteristics.map((val) => (
                    <li key={val}>
                        {t(`about-us.pii-and-e20.e-20-characteristics-${val}`)}
                    </li>
                ))}
            </ol>
            <p className="text-justify">{t("about-us.pii-and-e20.p3")}</p>
            <p className="text-justify">{t("about-us.pii-and-e20.p4")}</p>
            <p className="text-justify">{t("about-us.pii-and-e20.p5")}</p>
            <p className="text-justify">{t("about-us.pii-and-e20.p6")}</p>

            <h3 className="roboto-black mt-5">
                {t("about-us.background-iserec.title")}
            </h3>
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
            <p className="text-justify">{t("about-us.background-iserec.p3")}</p>
            <p className="text-justify">{t("about-us.background-iserec.p4")}</p>

            <h3 className="roboto-black mt-5">
                {t("about-us.objective-iserec.title")}
            </h3>
            <p className="text-justify">{t("about-us.objective-iserec.p1")}</p>

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

                    <ol type="a" className="roboto-regular text-justify">
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

                    <ol type="a" className="roboto-regular text-justify">
                        <li>{t("about-us.objective-iserec.advisor-1")}</li>
                    </ol>
                </li>
            </ol>
        </Container>
    )
}

export default Introduction
