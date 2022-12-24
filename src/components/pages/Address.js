import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
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
import { AddressAction, senAddress } from "../../redux/action";
const Address = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumer, setPhoneNumer] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cityTouch, setCityTouch] = useState(false);
  const [addrestouch, setAddressTouch] = useState(false);
  const [postalCodetouch, setPostalCodeTouch] = useState(false);
  const [phoneNumbertouch, setphoneNumberTouch] = useState(false);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
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
                    Address
                  </Navbar.Brand>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="city"
                          onBlur={(e) => {
                            setCity(e.target.value);
                            setCityTouch(true);
                          }}
                        />
                      </Form.Group>
                      {city.length < 2 && cityTouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          city must be at least 2 characters
                        </span>
                      )}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="address"
                          onBlur={(e) => {
                            setAddress(e.target.value);
                            setAddressTouch(true);
                          }}
                        />
                      </Form.Group>
                      {address.length < 10 && addrestouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          address must be at least 10 characters
                        </span>
                      )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>postal code</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="postal code"
                          onBlur={(e) => {
                            setPostalCode(e.target.value);
                            setPostalCodeTouch(true);
                          }}
                        />
                      </Form.Group>
                      {postalCode.length < 2 && postalCodetouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          postalCode must be at least 10 characters
                        </span>
                      )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>phone number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="phone number"
                          onBlur={(e) => {
                            setPhoneNumer(e.target.value);
                            setphoneNumberTouch(true)
                          }}
                        />
                          { !/^(09)[\d]/.test(phoneNumer) && phoneNumbertouch && (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          postalCode must be at least 10 characters
                          </span>
                      )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small"></p>
                      </Form.Group>
                      {clicked&&!address&&!city&&!postalCode&&!phoneNumer&& <p style={{ color: "red" }}>please fill the filds</p>}
                      <div className="d-grid">
                        
                        <Button
                          variant="success"
                          type="button"
                          onClick={() => {
                            setClicked(true)
                            if (
                              city.length >= 2 &&
                              address.length >= 10 &&
                              postalCode.length >= 8 &&
                              /^(09)[\d]/.test(phoneNumer)
                            ) {
                              dispatch(AddressAction(address,city,postalCode,phoneNumer))
                              navigate("/chekout");
                            } else {
                              navigate("/address");
                            }
                            // city.length >= 2 &&
                            //   address.length >= 9 &&
                            //   postalCode.length >= 7 &&

                            // navigate("/chekout");
                            // window.location.reload();
                            // dispatch(
                            //   senAddress(address, city, postalCode, phoneNumer)
                            // );
                          }}
                        >
                          Next
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

export default Address;
