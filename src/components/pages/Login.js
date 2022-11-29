import { data } from "autoprefixer";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertouch, setUserTouch] = useState(false);
  const [username, setUserName] = useState("");
  const [passwordtouch, setPasswordTouch] = useState(false);
  const [resolve, setResolve] = useState({});
  const req = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/login",
        {
          email: `${username}`,
          password: `${password}`,
        }
      );

      console.log(data);
    } catch (error) {
      const answer = error.response.data;
      setResolve(JSON.parse(JSON.stringify(answer)));
      console.log(answer);
      
    }
  };
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
                    Mango
                  </Navbar.Brand>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email / Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=" Email / Username"
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
                          placeholder="Password"
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
                          <a className="text-primary " onClick={()=>navigate("/settings/Changepassword")} style={{cursor:"pointer"}}>
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      {!resolve.success && (<p style={{fontWeight:"bold"}}>fild khaliye</p>)}
                      <div className="d-grid">
                        <Button variant="success" type="button" onClick={req}>
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
    </div>
  );
};

export default Login;
