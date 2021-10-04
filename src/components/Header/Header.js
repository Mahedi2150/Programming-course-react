import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "goldenrod"
    }
    const navLogo= {
        fontSize: "25px",
        cursor: "pointer",
        color: "goldenrod",
        fontWeight:"bolder"
      }
    return (
     
            <Navbar className="sticky-top " bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand  style={navLogo} to="/home">Coding School</Navbar.Brand>
                    <Nav >
                        <NavLink className="navStyle" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="navStyle" activeStyle={activeStyle} to="/service">Service</NavLink>
                        <NavLink className="navStyle" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="navStyle" activeStyle={activeStyle} to="/contract">Contract</NavLink>
                    </Nav>
                </Container>
            </Navbar>

     
    );
};

export default Header;
