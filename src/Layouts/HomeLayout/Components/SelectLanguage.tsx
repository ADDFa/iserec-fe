import { Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

const SelectLanguage = () => {
    const { i18n } = useTranslation()

    const langText = i18n.language.split("-")[0].toUpperCase()

    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                id="lang-select"
                className="d-flex align-items-center gap-1 w-100"
                variant="indigo"
            >
                <FontAwesomeIcon icon={faLanguage} />
                <p className="mb-0">{langText}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    href="#"
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("en-US")}
                >
                    English
                </Dropdown.Item>
                <Dropdown.Item
                    href="#"
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("id-ID")}
                >
                    Indonesia
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SelectLanguage
