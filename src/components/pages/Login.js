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

import "react-toastify/dist/ReactToastify.css";
import { sendLogin } from "../../redux/action";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertouch, setUserTouch] = useState(false);
  const [username, setUserName] = useState("");
  const [passwordtouch, setPasswordTouch] = useState(false);
  const { data, error } = useSelector((state) => state.login);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success rounded "></div>
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
                    Login
                  </Navbar.Brand>
                  <p className=" mb-5 pt-3">
                    Please enter your login and password!
                  </p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email / Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=" @Email / Username"
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
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a
                            className="text-primary "
                            onClick={() => navigate("/settings/Changepassword")}
                            style={{ cursor: "pointer" }}
                          >
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>

                      <div className="d-grid">
                        {error.length
                          ? error.map((item, index) => {
                              return (
                                <p key={index}>
                                  {item.message === "4 errors occurred" ||
                                  item.message === "2 errors occurred" ? (
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        color: "red",
                                      }}
                                    >
                                      pleas fill the filds
                                    </p>
                                  ) : (
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        color: "red",
                                      }}
                                    >
                                      {item.message}
                                    </p>
                                  )}
                                </p>
                              );
                            })
                          : ""}
                        <Button
                          variant="success"
                          type="button"
                          onClick={() => {
                            username.length >= 5 &&
                              password.length >= 7 &&
                              dispatch(sendLogin(username, password, token));
                          }}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Nav.Link
                          className="text-primary fw-bold "
                          onClick={() => navigate("/SingUp")}
                        >
                          Sign Up
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
      {data.length && data.map((item) => {})}
    </div>
  );
};

export default Login;
