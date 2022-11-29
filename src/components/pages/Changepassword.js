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
const Changepassword = () => {
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
                  
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Old password
                        </Form.Label>
                        <Form.Control type="password" placeholder=" Old password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          New password
                        </Form.Label>
                        <Form.Control type="password" placeholder="New password" />
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

export default Changepassword;