import Navbar from "Components/Navbar"
import { Fragment } from "react"
import HomeComponent from "Pages/Home/Home"
import AboutUs from "Pages/Home/AboutUs"
import Organization from "Pages/Home/Organization"
import Members from "Pages/Home/Members"
import News from "Pages/Home/News"
import Partners from "Pages/Home/Partners"
import Projects from "Pages/Home/Projects"

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <HomeComponent />
            <AboutUs />
            <Organization />
            <Members />
            <News />
            <Partners />
            <Projects />
        </Fragment>
    )
}

export default Home
