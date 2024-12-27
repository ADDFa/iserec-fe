import { Fragment } from "react/jsx-runtime"
import HomeComponent from "Pages/Home/Home"
import News from "Pages/Home/News"

const Home = () => {
    return (
        <Fragment>
            <HomeComponent />
            <News />
        </Fragment>
    )
}

export default Home
