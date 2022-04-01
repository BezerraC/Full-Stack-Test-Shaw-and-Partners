import React from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand style={navStyle}>Full Stack Test</NavbarBrand>
        <Link to="/" style={navStyle}>
          List of Users
        </Link>
      </Container>
    </Navbar>
  );
}

export default Nav;
