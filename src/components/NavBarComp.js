import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

import Home from "./Home";
import Farms from "./Farms";
import Processors from "./ProcessorList";
import Store from "./Store";
import Upcoming from "./Upcoming";
import Cart from "./Cart";

function NavBarComp() {
  return (
    <Navbar bg="primary" expand="sm ">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" element={<Home />} >
        Home
    </Nav.Link>

            <Nav.Link as={Link} to="/Processors" element={<Processors />}>Processors</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Farms" element={<Farms />}>Farms</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Store" element={<Store />}>Store</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Upcoming" element={<Upcoming />}>Upcoming Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

  );
}

export default NavBarComp;