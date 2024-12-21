import { useParams } from "react-router"

const News = () => {
    const { id } = useParams()

    return <div>News {id}</div>
}

export default News
