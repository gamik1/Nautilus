import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navigation.Component.css";

//react component for navigation panel
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="logo" href="/">
          Nautilus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="link" href="/">Home</Nav.Link>
            <Nav.Link className="link" href="/gallery">Gallery</Nav.Link>
            <Nav.Link className="link" href="/stores">Stores</Nav.Link>
            <Nav.Link className="link" href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
