import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function TopMenu(){
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to = "/">Invoice App</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to = "/invoices">
          <NavItem>Invoices</NavItem>
        </LinkContainer>
        <LinkContainer to = "/products">
          <NavItem>Products</NavItem>
        </LinkContainer>
        <LinkContainer to = "/customers">
          <NavItem>Customers</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default TopMenu;