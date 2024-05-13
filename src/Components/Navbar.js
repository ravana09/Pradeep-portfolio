import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row,Col } from "react-bootstrap";

function Navbars() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
          <Navbar.Brand href="#home">Pradeep</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutMe">About Me </Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
