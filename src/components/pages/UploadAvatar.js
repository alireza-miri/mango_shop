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
import { uploadavatar } from "../../redux/action";
import Saidbar from "./Saidbar";
const UploadAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const { data, error } = useSelector((state) => state.UploadAvatar);
  return (
    <div>
      <Container style={{ marginLeft: "0px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col>
            <Saidbar tab="avt" />
          </Col>

          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success rounded "></div>
            <Card
              className="shadow-lg p-3 mb-5 bg-body rounded "
              style={{ marginBottom: "0px" }}
            >
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
                    UploadAvatar
                  </Navbar.Brand>
                  <p className=" mb-5">Please enter your Avatar</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                          type="file"
                          onChange={(e) => setImg(e.target.files[0])}
                        />
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
                      <div className="d-grid ">
                        <Button
                          variant="success"
                          type="button"
                          className="mt-3"
                          onClick={() => dispatch(uploadavatar(img))}
                        >
                          Upload
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
                              Avatar successfully uploaded
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

export default UploadAvatar;
