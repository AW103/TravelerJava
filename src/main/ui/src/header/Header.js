import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import "./header.css";

const Header = ({userId}) => {
  return (
    <header>
      <Navbar collapseOnSelect className="top" expand="md">
        <Container className="brandContainer container-fluid">
          <Navbar.Brand className="brandName navbar-brand" href="/">
            Traveler
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="pageLinks" href="/tripBuilder">
                Trip Builder
              </Nav.Link>
              <Nav.Link className="pageLinks" href="/tripProfile">
                Trips
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
