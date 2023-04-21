import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism without fear or favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
     
    </Container>
  );
};

export default Header;
