import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Headers = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        
        style={{ height: "6rem",backgroundColor:"#f0f0f0" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold ", color: "green", fontSize: "40px",fontFamily:"'Titillium Web', sans-serif "}}
          >
            Mango
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">
                <img src="https://img.icons8.com/material-outlined/26/null/shopping-cart--v1.png" />
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="ms-5"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
