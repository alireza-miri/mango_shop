import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../../redux/action";
import { useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Badge } from "react-bootstrap";
const OneOrder = () => {
  const dispatch = useDispatch();

  const { orderId } = useParams();
  const { loading, data, error } = useSelector((state) => state.OneOrder);
  useEffect(() => {
    dispatch(getOneOrder(orderId));
  }, []);
  return (
    <div>
      {data.map((item) => {
        return item.orderItems.map((item) => {
          return (
            <section className="h-100 " key={item._id}>
              <MDBContainer className=" pt-4 h-100">
                <MDBRow className="justify-content-center align-items-center h-100 ">
                  <MDBCol md="10">
                    <MDBCard className="rounded-3 mb-4 shadow  bg-body rounded">
                      <MDBCardBody className="p-4">
                        <MDBRow className="justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              className="rounded-3"
                              fluid
                              src="data:image/jpeg;base64,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"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <p className="lead fw-normal mb-2">
                              {item.product.name}
                            </p>
                          </MDBCol>

                          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                            <MDBTypography tag="h5" className="mb-0">
                              ${item.product.price}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                            <MDBTypography tag="h5" className="mb-0">
                              count: {item.qty}
                            </MDBTypography>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          );
        });
      })}
      <div className="d-flex justify-content-around">
        {data.map((item) => {
          return (
            <Badge
              pill
              bg="primary"
              className="justify-content-center align-items-center h-100"
              style={{ fontSize: "1rem" }}
            >
              {" "}
              totalPrice: ${item.totalPrice}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default OneOrder;
