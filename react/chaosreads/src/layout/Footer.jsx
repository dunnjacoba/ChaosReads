import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Nav
      className="footer"
      bg="dark"
      activeKey="/"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" disabled>
          Link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" disabled>
          Link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
