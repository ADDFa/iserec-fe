import { Col, Image } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import launching from "assets/images/news/launching.jpg"
import { useTranslation } from "react-i18next"

const LaunchingEn = () => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <h2 className="roboto-black my-3 text-center">
                {t("news.news-1.title")}
            </h2>
            <hr />

            <Col xs={12} lg={7} className="mx-auto">
                <Image src={launching} rounded thumbnail className="w-100" />
            </Col>

            <div className="container">
                <h4 className="roboto-black mt-5">
                    ISEREC: A New Beacon for Solar Energy R&D
                </h4>
                <h6 className="fw-semibold">
                    Official Launch of the Indonesia Solar Energy Research
                    Centre
                </h6>
                <p className="text-justify mt-3">
                    <strong className="fw-semibold">
                        Jakarta, 2 October 2024 – The Indonesia Solar Energy
                        Research Centre (ISEREC)
                    </strong>{" "}
                    has been officially launched, marking a significant
                    milestone in the country’s clean energy journey. The
                    inauguration was held at the Ministry of Public Works and
                    Housing (PUPR) and attended by key national and
                    international stakeholders, including{" "}
                    <strong>Minister Basuki Hadimuljono</strong>, who formally
                    opened the event.
                </p>
                <p className="text-justify">
                    The establishment of ISEREC represents a joint initiative
                    between the
                    <strong>
                        Solar Energy Research Institute of Singapore (SERIS)
                    </strong>{" "}
                    and the{" "}
                    <strong>Institution of Engineers Indonesia (PII)</strong>,
                    aiming to position Indonesia at the forefront of solar
                    energy research and development in the region.
                </p>
                <hr />

                {/* --------------------------------------------------------------- */}
                <h4 className="roboto-black mt-5">
                    Advancing Indonesia's Clean Energy Future
                </h4>
                <p className="text-justify">
                    ISEREC was formed with the vision of becoming a national
                    centre of excellence in solar energy, dedicated to
                    accelerating the transition to renewable energy in
                    Indonesia. The centre will support the development of a
                    strong, science-based foundation for solar energy adoption
                    through:
                </p>

                <ul>
                    <li className="mb-2">
                        <strong>Applied research and development</strong> across
                        the solar energy value chain
                    </li>
                    <li className="mb-2">
                        <strong>International collaboration</strong> to bring
                        global expertise to local contexts
                    </li>
                    <li className="mb-2">
                        <strong>
                            Capacity building, training, and education
                        </strong>{" "}
                        for Indonesia’s future solar workforce
                    </li>
                    <li className="mb-2">
                        <strong>Technology innovation</strong>, focusing on both
                        urban and rural solar solutions
                    </li>
                    <li className="mb-2">
                        <strong>Policy and standard development</strong>,
                        aligning Indonesia with international benchmarks
                    </li>
                </ul>
                <p className="text-justify">
                    These pillars are designed to create a long-term,
                    sustainable solar energy ecosystem that supports the
                    country's commitment to reducing carbon emissions and
                    expanding renewable energy use.
                </p>
                <hr />

                {/* --------------------------------------------------------------- */}
                <h4 className="roboto-black mt-5">
                    Highlights from the Launch Ceremony
                </h4>
                <p className="text-justify">
                    During the launch event,{" "}
                    <strong>Minister Basuki Hadimuljono</strong> expressed
                    strong support for ISEREC's mission, stating that solar
                    energy will be a key component in Indonesia’s green
                    infrastructure and future urban planning. He emphasized the
                    importance of research-based decision making and the need to
                    nurture a skilled workforce in renewable energy sectors.
                </p>
                <p className="text-justify">
                    The event also showcased the strategic partnership between{" "}
                    <strong>PII</strong> and <strong>SERIS</strong>, which will
                    ensure knowledge transfer, access to international networks,
                    and robust research methodologies. Together, the two
                    institutions will lead ISEREC's research efforts across six
                    specialized working groups:
                </p>
                <ol className="roboto-black">
                    <li className="mb-2">Solar Panel Technology</li>
                    <li className="mb-2">Manufacturing</li>
                    <li className="mb-2">Urban PV Implementation</li>
                    <li className="mb-2">Solar Power Systems</li>
                    <li className="mb-2">Human Development</li>
                    <li className="mb-2">Standardization</li>
                </ol>

                <p className="text-justify">
                    These working groups will serve as collaborative platforms
                    for experts, academics, engineers, and industry players to
                    contribute to advancing solar energy solutions in Indonesia.
                </p>
                <hr />

                <h4 className="roboto-black mt-5">
                    Impact and National Significance
                </h4>
                <p className="text-justify">
                    ISEREC plays a critical role in achieving Indonesia’s
                    national renewable energy targets, including the goal of
                    sourcing{" "}
                    <strong>
                        23% of its energy from renewable sources by 2025
                    </strong>
                    . Through research, innovation, and inclusive collaboration,
                    ISEREC will:
                </p>
                <ul>
                    <li className="mb-2">
                        <strong>
                            Drive innovation in photovoltaic (PV) technologies
                        </strong>{" "}
                        and system integration
                    </li>
                    <li className="mb-2">
                        <strong>Strengthen local manufacturing</strong> and
                        reduce reliance on imported solar components
                    </li>
                    <li className="mb-2">
                        <strong>
                            Promote equitable access to solar energy
                        </strong>
                        , especially in remote and underdeveloped regions
                    </li>
                    <li className="mb-2">
                        <strong>Inform national energy policy</strong> with
                        evidence-based recommendations
                    </li>
                    <li className="mb-2">
                        <strong>Develop talent</strong> through education and
                        training in solar energy engineering and technology
                    </li>
                </ul>
                <p className="text-justify">
                    With a multidisciplinary approach, ISEREC is uniquely
                    positioned to shape Indonesia’s path toward a low-carbon,
                    energy-resilient future.
                </p>
                <hr />

                <h6 className="roboto-black mt-5">
                    Collaborating for a Sustainable Tomorrow
                </h6>
                <p className="text-justify">
                    The launch of ISEREC represents more than just the opening
                    of a new institution; it signals a commitment to placing
                    Indonesia on the global map of solar energy research and
                    leadership. By bringing together the strength of local
                    institutions and international expertise, ISEREC is poised
                    to generate transformative impact for both Indonesia and the
                    broader global energy landscape.
                </p>
                <p className="text-justify">
                    Stay tuned for more updates on ISEREC’s research activities, collaborative programs, and opportunities to participate in shaping Indonesia’s solar-powered future.
                </p>
            </div>
        </Fragment>
    )
}

export default LaunchingEn
