import { Col, Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Fragment } from "react/jsx-runtime"
import mou from "assets/images/news/mou.jpg"

const MoU = () => {
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
                    Penandatanganan MoU CTIS dan PII
                </h4>
                <h6 className="fw-semibold">
                    PII dan CTIS Jalin Kerja Sama Bangun Industri Semikonduktor
                    dan Sel Surya, ISEREC Perkenalkan Ketua Baru
                </h6>

                <p className="text-justify">
                    Indonesia mengambil langkah besar dalam penguatan teknologi
                    nasional dengan mendorong kolaborasi lintas lembaga untuk
                    mengembangkan industri semikonduktor dan sel surya dari hulu
                    hingga hilir. Kolaborasi ini ditandai dengan penandatanganan
                    Nota Kesepahaman (MoU) antara Persatuan Insinyur Indonesia
                    (PII) dan Center for Technology & Innovation Studies (CTIS),
                    yang menjadi bagian dari penguatan peran Indonesia Solar
                    Energy Research Center (ISEREC) sebagai pusat koordinasi
                    pengembangan teknologi energi terbarukan dan semikonduktor.
                </p>
                <p className="text-justify">
                    MoU tersebut ditandatangani oleh Ketua Umum PII, Dr. Ir.
                    Danis Sumadilaga dan Ketua CTIS, Dr. Ir. Wendy Aritenang,
                    disaksikan oleh Prof. Indroyono Soesilo selaku Pembina CTIS,
                    serta Co-CEO ISEREC, Prof. Michael Goutama, dalam sebuah
                    seremoni yang berlangsung di Jakarta pada 15 November 2024.
                </p>
                <p className="text-justify">
                    Ketua Umum PII, Dr. Danis, menegaskan bahwa sesuai dengan
                    amanat UU No. 11 Tahun 2014 tentang Keinsinyuran, PII
                    memiliki tanggung jawab untuk terus mendorong peningkatan
                    kapasitas insinyur Indonesia secara berkelanjutan. Salah
                    satu implementasi konkret dari komitmen ini adalah
                    pembentukan ISEREC, sebuah lembaga kolaboratif antara PII
                    dan Solar Energy Research Institute of Singapore (SERIS)
                    yang berada di bawah National University of Singapore (NUS).
                </p>
                <p className="text-justify">
                    ISEREC menjadi katalisator yang menjembatani kolaborasi
                    antara dunia riset, akademik, industri, dan kebijakan
                    publik. Salah satu fokus utamanya adalah membangun ekosistem
                    semikonduktor dan sel surya nasional yang mampu bersaing
                    secara global dan terintegrasi dalam rantai pasok dunia.
                    Kerja sama dengan CTIS memperkuat langkah tersebut,
                    mengingat CTIS memiliki jaringan pakar senior yang
                    berpengalaman dan siap berkontribusi langsung.
                </p>
                <p className="text-justify">
                    Dukungan historis terhadap industri ini telah dimulai sejak
                    era Menteri Ristek BJ Habibie pada akhir 1970-an, melalui
                    penugasan kepada Prof. Samaun Samadikun dan Prof. Barmawi
                    dari ITB untuk merintis prototipe industri sel surya.
                    Perjalanan panjang ini menghasilkan pendirian laboratorium
                    sel surya dan semikonduktor di Puspiptek Serpong, yang pada
                    awal 1990-an berhasil memproduksi purwarupa wafer dan sel
                    surya lokal.
                </p>
                <p className="text-justify">
                    Kini, dengan kebutuhan energi bersih dan potensi ekspor
                    energi surya ke negara tetangga seperti Singapura, Indonesia
                    dinilai siap menjadi pemain utama. ISEREC sedang menyusun
                    roadmap industri nasional serta melakukan pemetaan
                    intensitas iradiasi matahari di berbagai wilayah untuk
                    mendukung pembangunan pembangkit surya yang optimal.
                </p>
                <p className="text-justify">
                    Sebagai bagian dari pengembangan sumber daya manusia, NUS
                    mulai menawarkan beasiswa doktoral untuk peneliti Indonesia.
                    Inisiatif ini mendapat sambutan dari LPDP, yang menyatakan
                    kesiapan untuk memberikan skema co-funding. Jika NUS
                    memberikan lima beasiswa, LPDP akan menambahkan lima lagi
                    sehingga total sepuluh kandidat doktor Indonesia dapat
                    diberangkatkan.
                </p>
                <p className="text-justify">
                    Peluncuran kerja sama PII–CTIS juga menjadi momentum
                    peresmian kepemimpinan Dr. Andhika Prastawa sebagai Ketua
                    BATAP ISEREC, menggantikan Ir. Ricky Hikmawan Wargakusumah.
                </p>
            </div>
        </Fragment>
    )
}

export default MoU
