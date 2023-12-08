import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png"

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">Über mich</Nav.Link>
            <Nav.Link as={Link} to="/services">Leistungen</Nav.Link>
            <Nav.Link as={Link} to="/images">Bilder</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Preise</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
