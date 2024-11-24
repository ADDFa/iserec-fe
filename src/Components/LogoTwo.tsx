import logo2 from "assets/logo-2.png"
import { FC, ImgHTMLAttributes } from "react"

const LogoTwo: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img src={logo2} alt="ISEREC Logo" {...props} />
}

export default LogoTwo
