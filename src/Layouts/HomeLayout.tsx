import { Fragment } from "react/jsx-runtime"
import { Outlet } from "react-router"
import Navbar from "./HomeLayout/Navbar"
import Footer from "./HomeLayout/Footer"

const HomeLayout = () => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default HomeLayout
