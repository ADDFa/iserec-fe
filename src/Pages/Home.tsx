import { Fragment } from "react/jsx-runtime"
import HomeComponent from "Pages/Home/Home"
import AboutUs from "Pages/Home/AboutUs"
import Organization from "Pages/Home/Organization"
import WorkingGroup from "Pages/Home/WorkingGroup"
import Program from "Pages/Home/Program"

const Home = () => {
    return (
        <Fragment>
            <HomeComponent />
            <AboutUs />
            <Organization />
            <WorkingGroup />
            <Program />
        </Fragment>
    )
}

export default Home
