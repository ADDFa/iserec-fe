import { AnchorHTMLAttributes, FC, MouseEventHandler } from "react"
import { NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router"

const DropdownItem: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
    children,
    ...props
}) => {
    const navigate = useNavigate()

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault()

        const { pathname, hash } = new URL(e.currentTarget.href)
        navigate(`${pathname}${hash}`)
    }

    return (
        <NavDropdown.Item {...props} onClick={handleClick}>
            {children}
        </NavDropdown.Item>
    )
}

export default DropdownItem
