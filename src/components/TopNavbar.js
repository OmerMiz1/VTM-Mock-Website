import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";


const TopNavbar = (props) => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/Download">Download</Nav.Link>
                <Nav.Link as={Link} to="/RedME">Readme</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {props.user == null ? 
              <>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                <Nav.Link as={Link} to="/Register">Register</Nav.Link>
              </> :
              <Nav.Link onClick={() => props.logout()} as={Link} to="/home">Logout</Nav.Link>
              }   
            </Nav>
        </Navbar>
    </>
  );
};

export default TopNavbar;
