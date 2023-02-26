import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  // const [changeColor, setChangeColor] = useState(false);

  // const changeBackgroundColor = () => {
  //   if (window.screenY > 680) {
  //     setChangeColor(true);
  //   } else {
  //     setChangeColor(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackgroundColor();

  //   window.addEventListener("scroll", changeBackgroundColor);
  // });

  return (
    <div className="hero">
      <Navbar className="fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            <img
              alt=""
              src="/icons/KeDa.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold text-black">
              <Nav.Link className="mx-2" href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="mx-2" href="#pricing">
                PRICING
              </Nav.Link>
              <Nav.Link className="mx-2" href="#contact">
                CONTACT
              </Nav.Link>
            </Nav>
            <Link to="/login">
              <Button variant="outline-info">LOGIN</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hero min-vh-100 w-100" id="home">
        <Container>
          <div className="row mb-5 text-muted text-center mt-5">
            <div className="col"></div>
            <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, impedit.
            </div>
            <div className="col col-lg-2"></div>
          </div>
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-black text-start p-2 text-muted"
            >
              <em>"Lorem ipsum dolor sit amet consectetur."</em>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-black text-start p-2 text-muted"
            >
              <img id="image-home" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NavbarComponent;
