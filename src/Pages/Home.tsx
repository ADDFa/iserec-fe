import { Fragment } from "react/jsx-runtime"
import HomeComponent from "Pages/Home/Home"
import AboutUs from "Pages/Home/AboutUs"
import Organization from "Pages/Home/Organization"
import WorkingGroup from "Pages/Home/WorkingGroup"
import News from "Pages/Home/News"

const Home = () => {
    return (
        <Fragment>
            <HomeComponent />
            <News />
            <AboutUs />
            <Organization />
            <WorkingGroup />
        </Fragment>
    )
}

export default Home
