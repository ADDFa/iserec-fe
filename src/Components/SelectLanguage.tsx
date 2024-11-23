import { Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

const SelectLanguage = () => {
    const { i18n } = useTranslation()

    return (
        <Dropdown drop="start">
            <Dropdown.Toggle
                id="lang-select"
                className="d-flex align-items-center gap-1"
                variant="indigo"
            >
                <FontAwesomeIcon icon={faLanguage} />
                <p className="mb-0">{i18n.language.toUpperCase()}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    href="#"
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("en")}
                >
                    English
                </Dropdown.Item>
                <Dropdown.Item
                    href="#"
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("id")}
                >
                    Indonesia
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SelectLanguage
