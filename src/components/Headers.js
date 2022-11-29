import React from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Headers = ({ login, email }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ height: "6rem", backgroundColor: "#f0f0f0" }}
      >
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{
              fontWeight: "bold ",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Titillium Web', sans-serif ",
              cursor: "pointer",
            }}
          >
            Mango
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => navigate("/cart")}>
                <img src="https://img.icons8.com/material-outlined/26/null/shopping-cart--v1.png" />
              </Nav.Link>

              <p
                className="ms-4"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                variant=""
              >
                {!login ? (
                  <p
                    style={{ fontWeight: "bold", fontSize: "1.2rem",cursor:"pointer" }}
                    onClick={() => navigate("/login")}
                  >
                    log in
                  </p>
                ) : (
                  <div style={{ display: "flex" }}>
                    <p
                      style={{ fontWeight: "bold", fontSize: "1.2rem",cursor:"pointer" }}
                      onClick={() => navigate("/profile")}
                    >
                      {email}
                    </p>
                    <p>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          split
                          variant=""
                          id="dropdown-split-basic"
                        />

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/profile")}>
                            profile
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate("/orders")}>
                            orders
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => navigate("/settings/chanegProfile")}
                          >
                            settings
                          </Dropdown.Item>
                          <Dropdown.Item>log out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </p>
                  </div>
                )}
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
