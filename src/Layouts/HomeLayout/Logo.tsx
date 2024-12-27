import logo from "assets/logo.png"
import { Col, Container } from "react-bootstrap"

const Logo = () => {
    return (
        <div>
            <Container fluid className="p-2">
                <Col lg={5} md={9} xs={12}>
                    <img src={logo} alt="ISEREC" className="w-100" />
                </Col>
                <p className="fs-4 text-indigo mt-3">
                    A joint center by{" "}
                    <strong>
                        Solar Energy Research Institute of Singapore
                    </strong>{" "}
                    and <strong>the Institution of Engineers Indonesia</strong>
                </p>
            </Container>
        </div>
    )
}

export default Logo
