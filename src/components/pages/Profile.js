import React from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
const Profile = () => {
  // const login = useSelector((state) => state.chekLogin);
  const email = useSelector((state) => state.getUser?.email);
  const firstName = useSelector((state) => state.getUser?.firstname);
  const lastName = useSelector((state) => state.getUser?.lastname);
  const mobile = useSelector((state) => state.getUser?.mobile);
  const age = useSelector((state) => state.getUser?.age);
  const city = useSelector((state) => state.getUser?.city);
  const gender = useSelector((state) => state.getUser?.gender);
  const userName = useSelector((state) => state.getUser?.username);
  const img = JSON.parse(localStorage.getItem("user"))?.image;

  return (
    <div>
      <section className="mt-5">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard
                className="mb-3 shadow-lg bg-body rounded"
                style={{ borderRadius: ".5rem", backgroundColor: "#f4f5f7" }}
              >
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src={
                        img
                          ? `${img}`
                          : "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/100/null/external-user-advertisement-tanah-basah-glyph-tanah-basah.png"
                      }
                      alt="Avatar"
                      className="my-5 shadow-lg"
                      style={{ width: "80%", height: "50%" }}
                      fluid
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">{userName}</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            {mobile}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      {firstName && lastName && (
                        <MDBTypography tag="h6">
                          {firstName} | {lastName}
                        </MDBTypography>
                      )}
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        {age && (
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">age</MDBTypography>
                            <MDBCardText className="text-muted">
                              {age}
                            </MDBCardText>
                          </MDBCol>
                        )}
                        {city && (
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">city</MDBTypography>
                            <MDBCardText className="text-muted">
                              {city}
                            </MDBCardText>
                          </MDBCol>
                        )}
                        {gender && (
                          <MDBCol size="12" className="mb-3">
                            <MDBTypography tag="h6">gender</MDBTypography>
                            <MDBCardText className="text-muted">
                              {gender}
                            </MDBCardText>
                          </MDBCol>
                        )}
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Profile;
