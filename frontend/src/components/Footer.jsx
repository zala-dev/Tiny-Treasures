import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          {/* <Col className="text-center py-3">Copyright &copy; Zala {year}</Col> */}
          <Col className="text-center py-3 h3">
            Order now by calling 000 000 000!
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
