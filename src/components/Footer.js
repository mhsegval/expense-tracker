import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div>
      <Navbar fixed="bottom" variant="dark" bg="primary">
        <Container>
          <Navbar.Brand href="#">copyright reserved to @mhsegval</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
