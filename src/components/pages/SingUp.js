import React, { useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendSingUp } from "../../redux/action";

const SingUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chekpas, setChekPas] = useState("");
  const [number, setNumber] = useState("");

  const [usertouch, setUserTouch] = useState(false);
  const [emailtouch, setEmailTouch] = useState(false);
  const [passwordtouch, setPasswordTouch] = useState(false);
  const [confirmPasswordtouch, setConfirmPasswordTouch] = useState(false);
  const [mobiletouch, setMobileTouch] = useState(false);
  const [confrimps, setConfirmPs] = useState(false);

  const { data, error } = useSelector((state) => state.singup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success"></div>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded">
              <Card.Body>
                <div className="mb-3 mt-md-4">
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
                    Sign up
                  </Navbar.Brand>
                  {data.map((item) => {
                    return (
                      <p
                        style={{
                          color: "#018383",
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      >
                        Now you can login
                      </p>
                    );
                  })}
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="username"
                          onBlur={(e) => {
                            setUserName(e.target.value);
                            setUserTouch(true);
                          }}
                        />
                      </Form.Group>
                      {username.length < 5 && usertouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          username must be at least 5 characters
                        </span>
                      )}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder=" @email"
                          onBlur={(e) => {
                            setEmail(e.target.value);
                            setEmailTouch(true);
                          }}
                        />
                      </Form.Group>
                      {!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) &&
                        emailtouch && (
                          <span style={{ fontWeight: "bold", color: "red" }}>
                            email isn't valid
                          </span>
                        )}

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="#Aa123456"
                          onBlur={(e) => {
                            setPassword(e.target.value);
                            setPasswordTouch(true);
                          }}
                        />
                      </Form.Group>
                      {!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                        password
                      ) &&
                        passwordtouch && (
                          <span style={{ fontWeight: "bold", color: "red" }}>
                            password must be at least 1 specilal chracter and 1
                            capital chracter 1 lower chracter and 4 number
                          </span>
                        )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirmpassword</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirmpassword"
                          onBlur={(e) => {
                            setChekPas(e.target.value);
                            setConfirmPasswordTouch(true);
                          }}
                        />
                      </Form.Group>
                      {chekpas !== password && confirmPasswordtouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          password is not match
                        </span>
                      )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="09*********"
                          onBlur={(e) => {
                            setNumber(e.target.value);
                            setMobileTouch(true);
                          }}
                        />
                      </Form.Group>
                      {!/^(09)[\d]/.test(number) && mobiletouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          phone number is not valid
                        </span>
                      )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small"></p>
                      </Form.Group>

                      {error.length
                        ? error.map((item, index) => {
                            return (
                              <p key={index}>
                                {!item.message ? (
                                  <p
                                    style={{ fontWeight: "bold", color: "red" }}
                                  >
                                    pleas fill the filds
                                  </p>
                                ) : (
                                  <p
                                    style={{ fontWeight: "bold", color: "red" }}
                                  >
                                    {item.message}
                                  </p>
                                )}
                              </p>
                            );
                          })
                        : ""}
                      <div className="d-grid">
                        <Button
                          variant="success"
                          type="button"
                          onClick={() =>
                            username.length >= 5 &&
                            email.length &&
                            password.length >= 7 &&
                            chekpas.length === password.length &&
                            // number.length === 11 &&
                            dispatch(
                              sendSingUp(username, email, password, number)
                            )
                          }
                        >
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        <Nav.Link
                          className="text-primary fw-bold "
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </Nav.Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingUp;
