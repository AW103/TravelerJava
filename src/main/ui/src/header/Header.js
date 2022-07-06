import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import "./header.css";

const Header = ({userId}) => {
  return (
    <header>
      <Navbar collapseOnSelect className="top" expand="md">
        <Container className="brandContainer container-fluid">
          <Link to="/" className="brandName navbar-brand">
            Traveler
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/tripBuilder" className="pageLinks nav-link">
                Trip Builder
              </Link>
              <Link to="/tripProfile" className="pageLinks nav-link">
                Trips
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
