import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Chaos Reads Things</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#blogposts">Blog Posts</Nav.Link>
            <Nav.Link href="#bookmail">Book Mail</Nav.Link>
            <NavDropdown title="More Stuffs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#contacts">Contact Me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#aboutme">About Chaos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#reviewlevels">
                Review Breakdown
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#spicylevels">
                Spicy Breakdown
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#booklinks">The Books</Nav.Link>
            <Nav.Link eventKey={2} href="#thestickers">
              Stickers!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
