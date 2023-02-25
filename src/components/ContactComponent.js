import React from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <div id="contact" className="contact min-vh-100 d-flex">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold mb-5" data-aos="fade-out">
              Contact Us
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-md-2 row-cols-1 justify-content-center mb-4">
          <Col data-aos="fade-out">
            <h6 className="fw-bold">KEEP IN TOUCH WITH US</h6>
            <p className="text-black-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              distinctio exercitationem iure tempora corrupti ex cumque
              voluptatibus nesciunt atque autem!
            </p>
            <p className="text-black-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              distinctio exercitationem iure tempora corrupti ex cumque
              voluptatibus nesciunt atque autem!
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex align-content-between">
                <i className="fa-solid fa-location fs-4 px-3"></i>
                <p>
                  Jl. Gulama Ujung, Tangkerang Barat, Kec. Marpoyan Damai, Kota
                  Pekanbaru
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-content-between">
                <i className="fa-solid fa-phone fs-4 px-3"></i>
                <p>(+62)82286250694</p>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-content-between">
                <i className="fa-solid fa-envelope fs-4 px-3"></i>
                <p>muhammadzakie22g@gmail.com</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="form" data-aos="fade-in" data-aos-delay="200">
            <h6 className="fw-bold mb-4" data-aos="fade-out">
              MAIL US YOUR MESSAGE
            </h6>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter subject"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
