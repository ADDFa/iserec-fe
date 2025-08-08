import { Col, Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Fragment } from "react/jsx-runtime"
import launching from "assets/images/news/launching.jpg"

const Launching = () => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <h3 className="roboto-black my-3 text-center">
                {t("news.news-1.title")}
            </h3>
            <hr />

            <Col xs={12} lg={7} className="mx-auto">
                <Image src={launching} rounded thumbnail className="w-100" />
            </Col>

            <div className="container">
                <h4 className="roboto-black mt-5">
                    ISEREC: Tonggak Baru Riset Energi Surya Nasional
                </h4>
                <h6 className="fw-semibold">
                    Peluncuran Resmi Indonesia Solar Energy Research Centre
                    (ISEREC)
                </h6>
                <p className="text-justify mt-3">
                    <strong className="fw-semibold">
                        Jakarta, 2 Oktober 2024 – Indonesia Solar Energy
                        Research Centre (ISEREC)
                    </strong>{" "}
                    resmi diluncurkan, menandai langkah penting dalam perjalanan
                    Indonesia menuju transisi energi bersih. Acara peresmian
                    berlangsung di Auditorium Kementerian Pekerjaan Umum dan
                    Perumahan Rakyat (PUPR) dan dihadiri oleh berbagai pemangku
                    kepentingan nasional dan internasional, termasuk{" "}
                    <strong>Menteri PUPR Basuki Hadimuljono</strong>, yang
                    secara langsung membuka acara.
                </p>
                <p className="text-justify">
                    Pembentukan ISEREC merupakan inisiatif bersama antara{" "}
                    <strong>
                        Solar Energy Research Institute of Singapore (SERIS)
                    </strong>{" "}
                    dan <strong>Persatuan Insinyur Indonesia (PII)</strong>,
                    dengan tujuan menempatkan Indonesia sebagai pusat unggulan
                    riset dan pengembangan energi surya di kawasan Asia
                    Tenggara.
                </p>
                <hr />

                {/* --------------------------------------------------------------- */}
                <h4 className="roboto-black mt-5">
                    Mendorong Masa Depan Energi Bersih Indonesia
                </h4>
                <p className="text-justify">
                    ISEREC dibentuk dengan visi menjadi pusat keunggulan
                    nasional dalam bidang energi surya. Lembaga ini bertujuan
                    mempercepat transisi energi terbarukan di Indonesia melalui:
                </p>

                <ul>
                    <li className="mb-2">
                        <strong>Riset dan pengembangan terapan</strong> di
                        sepanjang rantai nilai energi surya
                    </li>
                    <li className="mb-2">
                        <strong>Kolaborasi internasional</strong> untuk
                        menghadirkan keahlian global ke konteks lokal
                    </li>
                    <li className="mb-2">
                        <strong>Pengembangan kapasitas</strong>, pelatihan, dan
                        pendidikan untuk tenaga kerja masa depan Indonesia
                    </li>
                    <li className="mb-2">
                        <strong>Inovasi teknologi</strong>, dengan fokus pada
                        solusi energi surya untuk wilayah urban dan rural
                    </li>
                    <li className="mb-2">
                        <strong>Penyusunan kebijakan dan standar</strong>, yang
                        sejalan dengan praktik internasional
                    </li>
                </ul>
                <p className="text-justify">
                    Kelima pilar ini dirancang untuk membangun ekosistem energi
                    surya yang berkelanjutan dalam jangka panjang, mendukung
                    komitmen Indonesia dalam menurunkan emisi karbon dan
                    memperluas penggunaan energi bersih.
                </p>
                <hr />

                {/* --------------------------------------------------------------- */}
                <h4 className="roboto-black mt-5">
                    Sorotan dari Acara Peluncuran
                </h4>
                <p className="text-justify">
                    Dalam sambutannya,{" "}
                    <strong>Menteri Basuki Hadimuljono</strong> menyampaikan
                    dukungan penuh terhadap misi ISEREC. Beliau menegaskan bahwa
                    energi surya akan menjadi komponen penting dalam pembangunan
                    infrastruktur hijau dan perencanaan perkotaan masa depan
                    Indonesia. Menteri Basuki juga menyoroti pentingnya
                    pengambilan keputusan berbasis riset serta perlunya
                    peningkatan kapasitas sumber daya manusia di sektor energi
                    terbarukan.
                </p>
                <p className="text-justify">
                    Acara ini juga menampilkan kemitraan strategis antara{" "}
                    <strong>PII</strong> dan <strong>SERIS</strong>, yang akan
                    memastikan transfer pengetahuan, akses ke jejaring
                    internasional, dan penerapan metodologi riset yang kuat.
                    Bersama-sama, kedua institusi ini akan memimpin kegiatan
                    riset ISEREC melalui enam kelompok kerja (working group)
                    berikut:
                </p>
                <ol className="roboto-black">
                    <li className="mb-2">Teknologi Panel Surya</li>
                    <li className="mb-2">Manufaktur</li>
                    <li className="mb-2">
                        Implementasi PV di Kawasan Perkotaan
                    </li>
                    <li className="mb-2">
                        Sistem Pembangkit Listrik Tenaga Surya (PLTS)
                    </li>
                    <li className="mb-2">Pengembangan SDM</li>
                    <li className="mb-2">Standarisasi</li>
                </ol>
                <p className="text-justify">
                    Kelompok-kelompok kerja ini akan menjadi wadah kolaboratif
                    bagi para pakar, akademisi, insinyur, dan pelaku industri
                    untuk berkontribusi dalam pengembangan solusi energi surya
                    di Indonesia.
                </p>
                <hr />

                <h4 className="roboto-black mt-5">
                    Dampak dan Signifikansi Nasional
                </h4>
                <p className="text-justify">
                    ISEREC memiliki peran penting dalam pencapaian target energi
                    terbarukan nasional, termasuk upaya mencapai{" "}
                    <strong>
                        23% bauran energi dari sumber terbarukan pada tahun 2025
                    </strong>
                    . Melalui riset, inovasi, dan kolaborasi inklusif, ISEREC
                    akan:
                </p>
                <ul>
                    <li className="mb-2">
                        <strong>Mendorong inovasi</strong> dalam teknologi
                        fotovoltaik (PV) dan integrasi sistem
                    </li>
                    <li className="mb-2">
                        <strong>Menguatkan industri manufaktur lokal</strong>{" "}
                        untuk mengurangi ketergantungan pada impor
                    </li>
                    <li className="mb-2">
                        <strong>Meningkatkan akses energi</strong> terutama di
                        wilayah terpencil dan tertinggal
                    </li>
                    <li className="mb-2">
                        <strong>Memberikan masukan berbasis data</strong> untuk
                        kebijakan energi nasional
                    </li>
                    <li className="mb-2">
                        <strong>Membangun talenta muda</strong> melalui
                        pendidikan dan pelatihan di bidang energi surya
                    </li>
                </ul>
                <p className="text-justify">
                    Dengan pendekatan multidisipliner, ISEREC berada dalam
                    posisi strategis untuk membentuk masa depan Indonesia yang
                    rendah karbon dan tangguh secara energi.
                </p>
                <hr />

                <h6 className="roboto-black mt-5">
                    Menuju Kolaborasi untuk Masa Depan Berkelanjutan
                </h6>
                <p className="text-justify">
                    Peluncuran ISEREC bukan sekadar pembukaan lembaga baru,
                    tetapi juga simbol komitmen Indonesia untuk menjadi pemain
                    utama dalam riset energi surya di tingkat global. Melalui
                    sinergi antara kekuatan institusi lokal dan keahlian
                    internasional, ISEREC siap memberikan dampak
                    transformasional, baik untuk Indonesia maupun komunitas
                    global.
                </p>
                <p className="text-justify">
                    Ikuti terus kabar terbaru dari program riset, kolaborasi,
                    dan peluang keterlibatan ISEREC dalam membentuk masa depan
                    energi surya Indonesia.
                </p>
            </div>
        </Fragment>
    )
}

export default Launching
