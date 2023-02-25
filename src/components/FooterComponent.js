import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-light">programmercintasunnah</h3>
          </Col>
          <Col className="text-end">
            <i className="fa-brands fa-facebook text-light fs-1 mx-2 mx-lg-3"></i>
            <i className="fa-brands fa-twitter text-light fs-1 mx-2 mx-lg-3"></i>
            <i className="fa-brands fa-instagram text-light fs-1 mx-2 mx-lg-3"></i>
            <i className="fa-brands fa-linkedin text-light fs-1 mx-2 mx-lg-3"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">
              &copy; Copyright by programmercintasunnah 2023, All Rght Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
