import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function Navbars() {
  return (
    <>
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Col  lg={4} xs={2} >
              <Navbar.Brand href="/">Pradeep</Navbar.Brand>
            </Col>
            <Col  lg={3}  className="d-flex justify-content-end">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Col  lg={5} xs={10}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end w-100">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutMe">About Me</Nav.Link>
                  <Nav.Link href="/skill">Skill</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}

export default Navbars;


