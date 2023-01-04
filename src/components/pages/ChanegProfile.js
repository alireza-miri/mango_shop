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
import { changeprofile } from "../../redux/action";
import Saidbar from "./Saidbar";
const ChangeProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [firstNameOnBelour, setFirstNameOnBelour] = useState(false);
  const [lastNameOnBelour, setLastNameOnBelour] = useState(false);
  const [ageOnBelour, setAgeOnBelour] = useState(false);
  const [cityOnBelour, setCityOnBelour] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.changeprofile);
  return (
    <div>
      <Container style={{ marginLeft: "0px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col>
            <Saidbar tab="chprf" />
          </Col>

          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success rounded "></div>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded ">
              <Card.Body>
                <div className="mb-3 mt-md-0">
                  <Navbar.Brand
                    onClick={() => navigate("")}
                    style={{
                      fontWeight: "bold ",
                      color: "green",
                      fontSize: "40px",
                      fontFamily: "'Titillium Web', sans-serif ",
                      cursor: "pointer",
                    }}
                  >
                    ChangeProfile
                  </Navbar.Brand>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="first name"
                          onBlur={(e) => {
                            setFirstName(e.target.value);
                            setFirstNameOnBelour(true);
                          }}
                        />
                        {firstNameOnBelour && firstName.length < 3 && (
                          <p style={{ color: "red" }}>
                            firstname must be at least 3 characters
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="last name"
                          onBlur={(e) => {
                            setLastName(e.target.value);
                            setLastNameOnBelour(true);
                          }}
                        />
                        {lastNameOnBelour && lastName.length < 3 && (
                          <p style={{ color: "red" }}>
                            lastName must be at least 3 characters
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="age"
                            onBlur={(e) => {
                              setAge(e.target.value);
                              setAgeOnBelour(true);
                            }}
                          />
                          {ageOnBelour && age < 15 && (
                            <p style={{ color: "red" }}>
                              age must be greater than or equal to 15
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="city"
                            onBlur={(e) => {
                              setCity(e.target.value);
                              setCityOnBelour(true);
                            }}
                          />
                          {cityOnBelour && city.length < 3 && (
                            <p style={{ color: "red" }}>
                              city must be at least 3 characters
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small"></p>
                        </Form.Group>
                        <Form.Label>Gender</Form.Label>
                        {["radio"].map((type) => (
                          <Form key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="female"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                              onBlur={() => setGender("female")}
                            />
                            <Form.Check
                              inline
                              label="male"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                              onBlur={() => setGender("male")}
                            />
                          </Form>
                        ))}
                      </Form.Group>
                      {isClicked && !firstName && !lastName && !age && !city ? (
                        <p style={{ color: "red" }}>please fill the filds</p>
                      ) : "" }
                      <div className="d-grid">
                        <Button
                          variant="success"
                          type="button"
                          onClick={() => {
                            setIsClicked(true)
                            dispatch(
                              changeprofile(
                                firstName,
                                lastName,
                                gender,
                                city,
                                age
                              )
                            );
                            localStorage.setItem(
                              "chProfile",
                              JSON.stringify(true)
                            );
                            setTimeout(() => {
                      
                                  window.location.reload()
                            },1500)
                          }}
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
                              Your profile has been successfully updated
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

export default ChangeProfile;
