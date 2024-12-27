import { Fragment } from "react/jsx-runtime"
import { Outlet } from "react-router"
import Navbar from "./HomeLayout/Navbar"
import Footer from "./HomeLayout/Footer"
import Logo from "./HomeLayout/Logo"

const HomeLayout = () => {
    return (
        <Fragment>
            <Logo />
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default HomeLayout
