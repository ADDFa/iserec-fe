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

            <div className="container">
                <h4 className="roboto-black mt-5">
                    The Signing of the MoU between CTIS and PII
                </h4>
                <h6 className="fw-semibold">
                    PII and CTIS Forge Partnership to Develop Semiconductor and
                    Solar Cell Industry, ISEREC Introduces New Chairperson
                </h6>

                <p className="text-justify">
                    Indonesia has taken a significant step in strengthening
                    national technology by encouraging cross-institutional
                    collaboration to develop the semiconductor and solar cell
                    industry from upstream to downstream. This collaboration was
                    formalized through the signing of a Memorandum of
                    Understanding (MoU) between the Institution of Engineers
                    Indonesia (PII) and the Center for Technology & Innovation
                    Studies (CTIS), marking the enhanced role of the Indonesia
                    Solar Energy Research Center (ISEREC) as a key coordination
                    hub for advancing renewable energy and semiconductor
                    technologies.
                </p>

                <p className="text-justify">
                    The MoU was signed by PII Chairman Dr. Ir. Danis Sumadilaga
                    and CTIS Chairman Dr. Ir. Wendy Aritenang, witnessed by
                    Prof. Indroyono Soesilo, CTIS Advisor, and Prof. Michael
                    Goutama, Co-CEO of ISEREC, during a ceremony held in Jakarta
                    on November 15, 2024.
                </p>

                <p className="text-justify">
                    Dr. Danis emphasized that, in line with Law No. 11 of 2014
                    on Engineering, PII has the responsibility to continually
                    support the development of Indonesian engineers. One
                    concrete implementation of this commitment is the
                    establishment of ISEREC — a collaborative institution
                    between PII and the Solar Energy Research Institute of
                    Singapore (SERIS), part of the National University of
                    Singapore (NUS).
                </p>

                <p className="text-justify">
                    ISEREC acts as a catalyst connecting research, academia,
                    industry, and public policy. Its main focus is to develop a
                    national semiconductor and solar cell ecosystem that is
                    globally competitive and fully integrated into the global
                    supply chain. The partnership with CTIS further strengthens
                    this initiative, as CTIS brings a network of experienced
                    senior experts ready to contribute directly.
                </p>

                <p className="text-justify">
                    Support for this industry dates back to the era of Minister
                    of Research and Technology B.J. Habibie in the late 1970s,
                    when Prof. Samaun Samadikun and Prof. Barmawi from ITB were
                    commissioned to develop early prototypes of solar cell
                    industry. This long journey led to the establishment of a
                    solar cell and semiconductor laboratory at Puspiptek
                    Serpong, which in the early 1990s succeeded in producing
                    local prototypes of wafers and solar cells.
                </p>

                <p className="text-justify">
                    Today, with the increasing demand for clean energy and the
                    potential for solar energy export to neighboring countries
                    such as Singapore, Indonesia is seen as ready to become a
                    major player. ISEREC is currently drafting a national
                    industry roadmap and conducting solar irradiation mapping
                    across various regions to support the development of optimal
                    solar power plants.
                </p>

                <p className="text-justify">
                    As part of human resource development, NUS has begun
                    offering doctoral scholarships for Indonesian researchers.
                    This initiative has been welcomed by LPDP, which has
                    expressed readiness to provide a co-funding scheme. If NUS
                    offers five scholarships, LPDP will add another five,
                    enabling a total of ten Indonesian doctoral candidates to
                    study abroad.
                </p>

                <p className="text-justify">
                    The launch of the PII–CTIS collaboration also marked the
                    official appointment of Dr. Andhika Prastawa as the new
                    Chair of BATAP ISEREC, replacing Ir. Ricky Hikmawan
                    Wargakusumah.
                </p>
            </div>
        </Fragment>
    )
}

export default MoUEn
