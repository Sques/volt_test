import React, { Component } from 'react';
import store from '../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

import {Navbar, Nav, NavItem, Grid, Row} from 'react-bootstrap'

import Invoices from './Invoices'
import Customers from './Customers'
import Products from './Products'

class Root extends Component{

  notFoundPage = () => {
    console.log('404');
    return <h1>404</h1>
  }

  render(){
    return (
      <BrowserRouter>
        <Provider store = {store}>
          <div>

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

            <Grid>
              <Row className="show-grid">
                <Switch>
                  <Route path = "/invoices" component = {Invoices} />
                  <Route path = "/customers" component = {Customers} />
                  <Route path = "/products" component = {Products} />
                  <Route path = "*" render = {this.notFoundPage} />
                </Switch>
              </Row>
            </Grid>

          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}

export default Root;
