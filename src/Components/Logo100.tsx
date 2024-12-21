import { FC, ImgHTMLAttributes } from "react"
import logo100 from "assets/logo 100x100.jpg"

const Logo100: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img src={logo100} alt="ISEREC" {...props} />
}

export default Logo100
