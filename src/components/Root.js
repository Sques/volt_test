import React, { Component } from 'react';
import store from '../store'
import {Provider} from 'react-redux'
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, Grid, Row} from 'react-bootstrap'

import Invoices from './Invoices'
import InvoiceCreate from './Invoices/InvoiceCreate'
import InvoiceUpdate from './Invoices/InvoiceUpdate'
import Customers from './Customers'
import Products from './Products'

import history from '../history'
import '../main.css'
import 'react-select/dist/react-select.css';

class Root extends Component{

  notFoundPage = () => <h1>Page not found</h1>

  render(){
    return (
      <Router history={history}>
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
                  <Route path = "/invoices/new" component = {InvoiceCreate} exact />
                  <Route path = "/invoices/:id/edit" render = {this.getInvoicesEditById} exact />
                  <Route path = "/invoices" component = {Invoices} />
                  <Route path = "/customers" component = {Customers} />
                  <Route path = "/products" component = {Products} />
                  <Route path = "*" render = {this.notFoundPage} />
                </Switch>
              </Row>
            </Grid>

          </div>
        </Provider>
      </Router>
    );
  }

  getInvoicesEditById= ({match}) => {
    const {id} = match.params
    return <InvoiceUpdate id = {id} />
  }

}

export default Root;
