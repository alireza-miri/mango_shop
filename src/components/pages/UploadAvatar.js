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
const UploadAvatar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container style={{ marginLeft: "0px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col>
            <Saidbar />
          </Col>

          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success rounded "></div>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded " style={{marginBottom:"0px"}}>
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
                  <p className=" mb-5">Please enter your Avatar</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" />
                      </Form.Group>

                      <div className="d-grid ">
                        <Button variant="success" type="button" className="mt-3">
                          Upload
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

export default UploadAvatar;
