import React from "react";
import {Navbar, Container, Col} from "react-bootstrap";

const Footer = () => {
    console.log("Rendering Footer");
    return(
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                    <div>2021 - Policy App</div>
                </Col>
            </Container>
        </Navbar>
    )
}

export default React.memo(Footer);