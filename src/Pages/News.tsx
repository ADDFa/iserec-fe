import { FC, lazy, Suspense } from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router"

const LaunchingId = lazy(() => import("Pages/News/LaunchingId"))
const LaunchingEn = lazy(() => import("Pages/News/LaunchingEn"))
const MoUId = lazy(() => import("Pages/News/MoUId"))
const MoUEn = lazy(() => import("Pages/News/MoUEn"))

const Content: FC<{ name: string; lang: string }> = ({ name, lang }) => {
    const getContentId = (name: string) => {
        switch (name) {
            case "launching":
                return <LaunchingId />

            case "mou":
                return <MoUId />

            default:
                return <></>
        }
    }

    const getContentEn = (name: string) => {
        switch (name) {
            case "launching":
                return <LaunchingEn />

            case "mou":
                return <MoUEn />

            default:
                return <></>
        }
    }

    switch (lang) {
        case "id-ID":
            return getContentId(name)

        case "en-US":
            return getContentEn(name)
    }
}

const News = () => {
    const { i18n } = useTranslation()
    const { name } = useParams()

    return (
        <Container className="py-3">
            <Suspense>
                <Content name={name!} lang={i18n.language} />
            </Suspense>
        </Container>
    )
}

export default News
