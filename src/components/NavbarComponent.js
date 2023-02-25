import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

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
    <div className="">
      <Navbar bg="light" expand="lg">
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
            <Button variant="outline-info">LOGIN</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
