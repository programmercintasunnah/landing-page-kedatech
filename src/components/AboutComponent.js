import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutComponent = () => {
  return (
    <div className="about min-vh-100 d-flex" id="about">
      <Container>
        <h1 className="text-center fw-bold" data-aos="fade-out">
          About us
        </h1>
        <Row className="row-cols-lg-2 row-cols-md-1 row-cols-1 mb-5 justify-content-center align-items-center">
          <Col data-aos="fade-out" data-aos-delay="200" className="text-center">
            <img id="image-about" />
          </Col>
          <Col data-aos="fade-out" data-aos-delay="400" className="text-center">
            <p className="text-center" data-aos="fade-out">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus dolorem debitis veritatis dolorum minus optio rem quae
              omnis quia reprehenderit aliquam rerum porro aut, vero inventore
              quo! Officiis consequuntur modi dolore iste magnam, laudantium
              reiciendis enim fuga molestiae possimus ipsam esse harum labore
              hic magni doloremque odit aut, qui necessitatibus.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col data-aos="zoom-in" className="text-center mb-5 px-3">
            <i className="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Harga terjangkau</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-center mb-5 px-3"
          >
            <i className="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Fasilitas terbaik</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-center mb-5 px-3"
          >
            <i className="fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5 className="fw-bold">Tersertifikasi</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;
