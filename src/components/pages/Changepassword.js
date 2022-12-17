import React, { useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePaswword } from "../../redux/action";
import Saidbar from "./Saidbar";
const Changepassword = () => {
  const [oldPas, setOldPas] = useState("");
  const [newPas, setNewPas] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtouch, setPasswordTouch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error } = useSelector((state) => state.Changepassword);
  return (
    <div>
      <Container style={{ marginLeft: "0px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col>
            <Saidbar tab="chpas" />
          </Col>

          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success "></div>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded ">
              <Card.Body>
                <div className="mb-3 mt-md-0">
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
                    changePaswword
                  </Navbar.Brand>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Old password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder=" Old password"
                          onBlur={(e) => setOldPas(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          New password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="New password"
                          onBlur={(e) => setNewPas(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small"></p>
                      </Form.Group>
                      {error.map((item) => {
                        return (
                          <p
                            key={item.message}
                            style={{ color: "red", fontWeight: "bold" }}
                          >
                            {item.message}
                          </p>
                        );
                      })}
                      <div className="d-grid">
                        <Button
                          variant="success"
                          type="button"
                          onClick={() =>
                            dispatch(changePaswword(oldPas, newPas))
                          }
                        >
                          done
                        </Button>
                        {data.map((item) => {
                          return (
                            <p
                              key={item.message}
                              style={{
                                color: "#018383",
                                fontWeight: "bold",
                                fontSize: "25px",
                                paddingTop: "20px",
                              }}
                            >
                              <img src="https://img.icons8.com/doodle/40/null/checkmark.png" />
                              password has been successfully changed
                            </p>
                          );
                        })}
                      </div>
                    </Form>
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

export default Changepassword;
