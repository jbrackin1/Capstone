import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

import Home from "./Home";
import Farms from "./Farms";
import Processors from "./ProcessorList";


function NavBarComp() {
  return (
    <Navbar bg="primary" expand="sm ">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          {/* <Link to="/Processors" element={<Processors />} />  */}
          
            
  
            {/* <Nav.Link href="#home">Home</Nav.Link>> */}
            <Nav.Link as={Link} to="/Home" element={<Home />} >
        Home
    </Nav.Link>

            <Nav.Link as={Link} to="/Processors" element={<Processors />}>Processors</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

  );
}

export default NavBarComp;