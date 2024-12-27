import { Col, Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Fragment } from "react/jsx-runtime"
import launching from "assets/images/news/launching.jpg"

const Launching = () => {
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
                E20 (Engineering 20) adalah usulan dari Persatuan Insinyur
                Indonesia (PII) untuk menjadi kelompok yang terlibat dalam G20.
                Hal ini merupakan salah satu langkah berani untuk mengangkat
                peran insinyur dari sekadar Engineering menjadi Leader Engineers
                yang mampu memberikan kontribusi efektif dalam menghadapi
                tantangan ekonomi, lingkungan, dan kesehatan. Kami telah
                menerima dukungan dari berbagai negara; India, China, Jepang,
                Korea Selatan, Australia, AFEO, Amerika Serikat, Turki, Rusia,
                Arab Saudi, Afrika Selatan. Saat ini, kami sedang dalam proses
                untuk menjadi kelompok memiliki keterlibatan penuh dari G20.
            </p>

            <p className="mb-0">
                E20 dirancang sebagai kelompok yang terlibat di G20 dengan
                karakteristik berikut:
            </p>
            <ol>
                <li>
                    Indonesia sebagai “inisiator” E20 saat Indonesia menjadi
                    tuan rumah G20 pada tahun 2022.
                </li>
                <li>
                    Inisiatif aktif dari Indonesia merupakan kontribusi untuk
                    mengatasi tantangan global saat ini seperti perubahan iklim,
                    transformasi digital, dan kesehatan.
                </li>
            </ol>
            <p className="text-justify">
                E20, tidak hanya retorika dan usaha pencitraan, akan berfungsi
                sebagai platform kolaborasi yang menghasilkan hasil nyata,
                seperti transisi energi hijau, penerapan teknologi digital di
                berbagai sektor industri dengan cara yang praktis, dan fokus
                pada produksi produk perawatan kesehatan yang efisien serta
                hemat biaya.
            </p>
            <p className="text-justify">
                E20 akan menjadi platform produktif G20 untuk memberikan dampak
                global yang signifikan dan kontribusi positif dalam
                menyelesaikan berbagai masalah serta tantangan yang dihadapi
                ekonomi dan masyarakat.
            </p>
            <p className="text-justify">
                Di bawah platform E20 dan semangat yang terbangun, Pusat
                Penelitian Sel Surya Semikonduktor (Research Centre on Solar
                Cell Semiconductor), hasil kolaborasi dengan SERIS (Solar Energy
                Research Institute of Singapore), akan diresmikan pada 2 Oktober
                2024. ISEREC juga bekerja sama dengan berbagai lembaga
                penelitian dan universitas di Indonesia, seperti Badan Riset dan
                Inovasi Nasional (BRIN), Universitas Indonesia (UI), Institut
                Teknologi Bandung (ITB), Universitas Gajah Mada (UGM), Institut
                Teknologi Sepuluh Nopember (ITS), dan banyak lagi untuk
                membentuk jaringan kolaboratif.
            </p>
            <p className="text-justify">
                Dalam platform kolaborasi antara Singapura dan Indonesia terkait
                energi terbarukan, Solar Energy Research Institute of Singapore
                (SERIS) di National University of Singapore (NUS) dan Persatuan
                Insinyur Indonesia (PII) telah membentuk kolaborasi untuk
                melakukan penelitian dan pengembangan teknologi photovoltaic
                (PV) surya dengan melibatkan institusi lokal dan internasional,
                perusahaan, serta organisasi non- pemerintah lainnya.
            </p>

            <h4 className="roboto-black mt-5">LATAR BELAKANG ISEREC</h4>
            <p className="text-justify">
                <em>Sustainable Energy Association of Singapore</em> (SEAS) yang
                mewakili Konsorsium yang terdiri dari EDPR Sunseap, Gurin
                Energy, dan Keppel Infrastructure Holding (Anggota Konsorsium)
                telah mengusulkan rencana pengembangan Riau Green Economic
                Corridor dalam surat-surat sejak 9 November 2022;
            </p>
            <p className="text-justify">
                Berdasarkan hal tersebut, SEAS, Anggota Konsorsium, dan
                Kementerian Koordinator Bidang Kemaritiman dan Investasi
                (Kemenko Marves) telah mengadakan serangkaian pertemuan yang
                juga dihadiri oleh <em>Energy Market Authority</em> (EMA)
                Singapur, dan salah satu komitmen Konsorsium adalah mendukung
                program Penelitian dan Pengembangan teknologi{" "}
                <em>photovoltaic</em> (PV) surya (dari sel hingga modul dan
                sistem) sebagai bagian dari komitmen End-to-End;
            </p>
            <p className="text-justify">
                SEAS, Anggota Konsorsium, Kemenko Marves, dan EMA telah sepakat
                bahwa Solar Energy Research Institute of Singapore (SERIS) di
                National University of Singapore (NUS) dan Persatuan Insinyur
                Indonesia (PII) akan bekerja sama untuk mewujudkan komitmen
                penelitian dan pengembangan yang disebutkan di atas dengan
                tujuan menyelenggarakan penelitian dan pengembangan kelas dunia
                pada teknologi <em>photovoltaic</em> (PV) surya yang melibatkan
                institusi lokal dan internasional, perusahaan, serta organisasi
                non-pemerintah lainnya.
            </p>
            <p className="text-justify">
                ISEREC akan bekerja sama dengan berbagai lembaga penelitian dan
                universitas di Indonesia seperti Badan Riset dan Inovasi
                Nasional (BRIN), Universitas Indonesia (UI), Institut Teknologi
                Bandung (ITB), Universitas Gajah Mada (UGM), Institut Teknologi
                Sepuluh Nopember (ITS), Institut Teknologi Indonesia (ITI), dan
                lainnya untuk membentuk jaringan kolaboratif.
            </p>

            <h4 className="roboto-black mt-5">TUJUAN ISEREC</h4>
            <p className="text-justify">
                Berikut adalah daftar tujuan dari Indonesia Solar Energy
                Research Centre (ISEREC) sesuai dengan MOU tertanggal 16 Agustus
                2023:
            </p>
            <ol className="text-justify">
                <li>
                    <span>Pendidikan</span>

                    <ol type="a">
                        <li>
                            Bekerja sama dengan berbagai Universitas dan
                            Institusi global;
                        </li>
                        <li>
                            Mendukung mahasiswa PhD dan pascadoktoral dalam
                            teknologi sel surya;
                        </li>
                        <li>Pertukaran mahasiswa untuk belajar;</li>
                        <li>
                            Pertukaran anggota fakultas untuk belajar,
                            penelitian, dan partisipasi dalam program
                            pendidikan;
                        </li>
                        <li>
                            Pertukaran akademisi untuk ceramah, diskusi, dan
                            berbagi pengalaman;
                        </li>
                        <li>
                            Pertukaran publikasi dalam bidang yang menjadi minat
                            kedua universitas;
                        </li>
                        <li>Pengembangan profesional kolaboratif;</li>
                        <li>Program pendidikan bersama; dan</li>
                        <li>Kegiatan lainnya yang disepakati bersama.</li>
                    </ol>
                </li>
                <li>
                    <span>Teknologi</span>

                    <ol type="a">
                        <li>
                            Mengembangkan tim Indonesia yang sangat terampil
                            dalam teknologi fotovoltaik surya;
                        </li>
                        <li>
                            Mendukung perusahaan Indonesia dalam mengembangkan
                            kemampuan manufaktur.
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Advisor</span>

                    <ol type="a">
                        <li>
                            Memberikan dukungan konsultasi kepada perusahaan dan
                            institusi berdasarkan penelitian dan pengembangan di
                            atas.
                        </li>
                    </ol>
                </li>
            </ol>

            <h4 className="roboto-black mt-5">Direksi</h4>
            <p>Terdapat dua Co-Direksi ISEREC:</p>
            <p className="ps-4">
                Prof. Michael Goutama
                <br />
                Wakil Ketua Komite Hubungan Internasional, PII
            </p>
            <p>dan</p>
            <p className="ps-4">
                Dr. Thomas Reindl
                <br />
                Deputy Chief Executive Officer, SERIS, NUS
            </p>
            <blockquote className="text-justify fst-italic text-secondary fs-5">
                "Kami sangat antusias menjadi bagian dari proyek Green Corridor
                dan pusat penelitian sel surya semikonduktor pertama. Dengan
                peluncuran ISEREC, Indonesia memulai perjalanan ekosistem
                semikonduktornya. Peresmian ini membuktikan kekuatan kolaborasi
                jaringan dan efektivitas inovasi nyata yang didasarkan pada
                model digital twin. Keberhasilan ISEREC didasarkan pada
                keyakinan bahwa ini akan menghasilkan nilai yang substansial
                untuk mendorong upaya pengembangan Sumber Daya Manusia Indonesia
                melalui penciptaan ekosistem industri berbasis tindakan,
                lapangan kerja yang terampil, dan kumpulan pengetahuan yang
                relevan serta kompetitif."
                <footer>— Dr. Ir. Danis Sumadilaga, Ketua PII</footer>
            </blockquote>
        </Fragment>
    )
}

export default Launching
