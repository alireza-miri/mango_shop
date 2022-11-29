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
import Saidbar from "./Saidbar";
const ChangeProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      
      <Container style={{marginLeft:"0px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col >
             <Saidbar />
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
                    Mango
                  </Navbar.Brand>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="first name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="last name" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="gender" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="age" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="city" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small"></p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="success"
                          type="button"
                          
                        >
                          done
                        </Button>
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
