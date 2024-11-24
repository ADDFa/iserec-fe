import { Carousel, Container, Image } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import theLaunching from "Images/the-launching.jpg"
import theLaunching2 from "Images/the-launching2.jpg"
import mouPhotos from "Images/mou-photos.jpg"

const Home = () => {
    const { t } = useTranslation()

    return (
        <section id="home" className="mt-3">
            <Container>
                <Carousel fade interval={2000}>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <Image
                                src={theLaunching}
                                alt="Launching ISEREC"
                                fluid
                                rounded
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>The Launching ISEREC</h3>
                            <p>{t("home-carousel.launching-desc")}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            src={theLaunching2}
                            alt="Launching II ISEREC"
                            fluid
                            rounded
                        />
                        <Carousel.Caption>
                            <h3>Green Economy Initiative</h3>
                            <p>{t("home-carousel.launching-desc-2")}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={mouPhotos} alt="MOU Photos" fluid rounded />
                        <Carousel.Caption>
                            <h3>Global Innovation Partnership</h3>
                            <p>{t("home-carousel.mou-desc")}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default Home
