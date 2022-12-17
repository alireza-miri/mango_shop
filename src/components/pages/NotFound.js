import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./notfound.css";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="page-404">
        <div class="four-o-four">
          <span>404!</span>
        </div>
        <div class="fof-text">
          <Button variant="success" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
