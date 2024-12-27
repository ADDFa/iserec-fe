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

            <h4 className="roboto-black mt-5">PII DAN E20 (ENGINEERING 20)</h4>
            <p className="text-justify">
                E20 (Engineering 20) is a proposal by Indonesia Institution of
                Engineers to be a engagement group of G20. It is a bold agenda
                to rapture Engineers from Engineering to become Leader Engineers
                who shall contribute in an effective way to deal with economic,
                environmental and health care challenges and issues. We have had
                received support from many countries, (
                <strong>
                    <em>Please name all countries that have given supports</em>
                </strong>
                ) . We are on the way to be a full pledge Engagement Group of
                G20.
            </p>

            <p className="mb-0">
                E20 is designed to be an Engagement Group of G20. It is designed
                to possess the following characteristics:
            </p>
            <ol>
                <li>
                    Indonesia is the “initiator” of E20 when Indonesia hosts G20
                    in 2022.
                </li>
                <li>
                    Indonesia’s active initiatives are its contributions to
                    current world challenges and resolutions in dealing with
                    Climate Change, digital transformation, and health care.
                </li>
            </ol>
            <p className="text-justify">
                E20 will, apart from rhetoric and image building exercises,
                serve as a platform for collaboration to produce tangible and
                real outcomes such as green energy transition, digital
                applications to multiple industrial sectors in workable manners
                and focusing on efficient and cost-effective production of
                health care products.
            </p>
            <p className="text-justify">
                E20 will serve a productive platform of G20 to produce
                significant global impacts and positive contributions to solve
                many issues and challenges facing economies and societies.
            </p>
            <p className="text-justify">
                Under the E20 platform and spirit, a Research Centre on Solar
                Cell Semiconductor, a collaboration with SERIS (Solar Energy
                Research Institute of Singapore), will be launched on 2nd
                October 2024. ISEREC also collaborates with other research
                institutions dan Indonesian universities such as Badan Riset dan
                Inovasi Nasional (BRIN), The University of Indonesia (UI),
                Bandung Institute of Technology (ITB), The University of
                Gajahmada (UGM), Sepuluh November Institute of Technology (ITS),
                and many others to form a collaborative network.
            </p>
            <p className="text-justify">
                Under a collaborative platform between Singapore and Indonesia
                concerning renewable energy, the Solar Energy Research Institute
                of Singapore (SERIS) at the National University of Singapore
                (NUS) and the Institution of Engineers Indonesia (PII) has
                formed a collaboration to constitute the Research and
                Development for the purposes of organizing a world class
                research and development on solar photovoltaic (PV) technologies
                involving local and international institutions, companies and
                other non-governmental organizations.
            </p>

            <h4 className="roboto-black mt-5">BACKGROUND OF ISEREC</h4>
            <p className="text-justify">
                The Sustainable Energy Association of Singapore (
                <strong>SEAS</strong>) representing a Consortium consisting of
                EDPR Sunseap, Gurin Energy and Keppel Infrastructure Holding
                (the <strong>Consortium Members</strong>) having proposed a
                development plan of Riau Green Economic Corridor in its letters
                starting from 9 November 2022;
            </p>
            <p className="text-justify">
                Pursuant to the above, SEAS, Consortium Members and The
                Coordinating Ministry of Maritime and Investment Affairs
                (Kemenko Marves) have held a number of meetings which were also
                attended by the Energy Market Authority of Singapore (
                <strong>EMA</strong>) and one of commitments of the Consortium
                is to support a Research and Development program for solar
                photovoltaic (PV) technologies (from solar cells to modules and
                systems) as a part of the intended{" "}
                <strong>End-to-End commitments</strong>;
            </p>
            <p className="text-justify">
                The SEAS, Consortium Members, Kemenko Marves, and EMA have
                agreed that the Solar Energy Research Institute of Singapore
                (SERIS) at the National University of Singapore (NUS) and the
                Institution of Engineers Indonesia (PII) to collaborate to
                constitute the Research and Development commitment mentioned
                above for the purposes of organising a world class research and
                development on solar photovoltaic (PV) technologies involving
                local and international institutions, companies and other
                non-governmental organisations; and
            </p>
            <p className="text-justify">
                ISEREC will collaborate with other research institutions dan
                Indonesian universities such as Badan Riset dan Inovasi Nasional
                (BRIN), The University of Indonesia (UI), Bandung Institute of
                Technology (ITB), The University of Gajahmada (UGM), Sepuluh
                November Institute of Technology (ITS), The Indonesia Institute
                of Technology (ITI) and others to form a collaborative network.
            </p>

            <h4 className="roboto-black mt-5">OBJECTIVES OF ISEREC</h4>
            <p className="text-justify">
                The following is a non-exhaustive list of the objectives of the
                Indonesia Solar Energy Research Centre (ISEREC) as contained in
                the MOU dated 16 August 2023 above:
            </p>
            <ol className="text-justify">
                <li>
                    <span>Education</span>

                    <ol type="a">
                        <li>
                            Collaborate with various global Universities and
                            Institutions;
                        </li>
                        <li>
                            Supporting PhD and Post-doctoral students in solar
                            cell technologies;
                        </li>
                        <li>Exchange of students for study;</li>
                        <li>
                            Exchange of faculty members for study, research, and
                            participation in educational programs;
                        </li>
                        <li>
                            Exchange of scholars for lectures, talks, and
                            sharing of experience;
                        </li>
                        <li>
                            Exchange of publications in fields of interest to
                            both universities;
                        </li>
                        <li>Collaborative professional development;</li>
                        <li>Joint educational programs; and</li>
                        <li>Other activities as mutually agreed.</li>
                    </ol>
                </li>
                <li>
                    <span>Technologies</span>

                    <ol type="a">
                        <li>
                            To develop an Indonesian Team to be highly
                            proficient in solar photovoltaic technologies;
                        </li>
                        <li>
                            To support Indonesian companies to develop
                            manufacturing capabilities.
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Advisory</span>

                    <ol type="a">
                        <li>
                            Provide advisory support to companies and other
                            institutions based on the above-mentioned works.
                        </li>
                    </ol>
                </li>
            </ol>

            <h4 className="roboto-black mt-5">Directors</h4>
            <p>There are two Co-Directors of ISEREC:</p>
            <p className="ps-4">
                Prof. Michael Goutama
                <br />
                Vice Chairman of International Affairs Committee, PII
            </p>
            <p>and</p>
            <p className="ps-4">
                Dr. Thomas Reindl
                <br />
                Deputy Chief Executive Officer, SERIS, NUS
            </p>
            <blockquote className="text-justify fst-italic text-secondary fs-5">
                "We are thrilled to be part of the Green Corridor project and
                the first solar cell semiconductor research centre, with the
                launching of ISEREC, Indonesia began its semiconductor ecosystem
                journey. Today’s launch is a testament to the power of networked
                collaboration and real innovation efficacy based on digital twin
                models. ISEREC’s success is founded on the belief that it will
                generate substantial values to propel Indonesia Human Capital
                efforts and through the creation of an action-based industrial
                ecosystem, skilled jobs, and a relevant and competitive
                knowledge pool.”
                <footer>
                    — Dr. Ir. Danis Sumadilaga, the Chairman of PII said
                </footer>
            </blockquote>
        </Fragment>
    )
}

export default LaunchingEn
