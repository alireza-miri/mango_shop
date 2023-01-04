import React, { useState } from "react";
import { useEffect } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/action";
const Headers = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.chekLogin);
  const email = useSelector((state) => state.getUser?.email);
  const product = JSON.parse(localStorage.getItem("product"));
 
  const img = JSON.parse(localStorage.getItem("user"))?.image;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [login]);

  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand="lg"
          style={{ height: "6rem", backgroundColor: "#f0f0f0" }}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand
              onClick={() => navigate("/")}
              style={{
                fontWeight: "bold ",
                color: "green",
                fontSize: "40px",
                fontFamily: "'Titillium Web', sans-serif ",
                cursor: "pointer",
                marginLeft: "10%",
              }}
            >
              Mango
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    onClick={() => navigate("/cart")}
                    style={{ marginTop: "2rem" }}
                  >
                    <img src="https://img.icons8.com/material-outlined/23/null/shopping-cart--v1.png" />
                    <Badge bg="success">{product ? product.length : "0"}</Badge>
                  </Nav.Link>

                  <div
                    className="ms-4"
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    variant=""
                  >
                    {!login ? (
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          cursor: "pointer",
                          marginTop: "35px",
                          marginRight: "10rem",
                        }}
                        onClick={() => navigate("/login")}
                      >
                        log in
                      </p>
                    ) : (
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div>
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                              cursor: "pointer",
                              marginRight: "5rem",
                              marginTop: "10px",
                            }}
                            onClick={() => navigate("/profile")}
                          >
                            <img
                              src={
                                img
                                  ? `${img}`
                                  : "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/100/null/external-user-advertisement-tanah-basah-glyph-tanah-basah.png"
                              }
                              style={{
                                width: "4rem",
                                height: "4rem",
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                            />
                            {email}
                          </div>
                          <div>
                            <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle
                                split
                                variant=""
                                id="dropdown-split-basic"
                              />

                              <Dropdown.Menu>
                                <Dropdown.Item
                                  onClick={() => navigate("/profile")}
                                >
                                  profile
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    navigate("/orders");
                                    window.location.reload();
                                  }}
                                >
                                  orders
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() =>
                                    navigate("/settings/chanegProfile")
                                  }
                                >
                                  settings
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.setItem("login",JSON.stringify(false));
                                    localStorage.removeItem("user");
                                    localStorage.removeItem("product");
                                    window.location.reload();
                                  }}
                                >
                                  log out
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Headers;
