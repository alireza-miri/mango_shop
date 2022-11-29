import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const GetProfile = () => {
    const [login,setLogin]=useState(null)
    const [email,setEmail]=useState("")
  const req = async () => {
    try {
      const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaGF3bmkiLCJpYXQiOjE2Njk3MTc5MTgsImV4cCI6MTY3MDMyMjcxOH0.J-SaO5dS62HXt2olKVw6iIf50FYuj1pyWt7amUFYM8g",
        },
      });
      setLogin(data.success);
      setEmail(data.email);
    } catch (error) {
        setLogin(error.response.data.success);
    }
  };console.log(login);
  return <div>
    <Button onClick={req}>click</Button>
  </div>;
};

export default GetProfile;
