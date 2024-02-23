import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

function Navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <Nav.Link as={NavLink} to="/events" eventKey="events" activeClassName="active">
            MyEvents
          </Nav.Link>
          
          <Nav.Link as={NavLink} to="/events" eventKey="events" activeClassName="active">
            Events
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar;