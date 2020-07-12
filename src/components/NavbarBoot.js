import React, { Component } from "react";
import "./NavbarBoot.css";
import {Navbar, Container, Nav} from 'react-bootstrap';
 

class NavbarBoot extends Component {
  render(){
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="/">HDNonni</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="/fun">
              Fun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
  }
}
export default NavbarBoot;
