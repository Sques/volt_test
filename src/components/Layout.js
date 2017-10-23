import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Grid, Row} from 'react-bootstrap'

import Invoices from './Invoices'
import InvoiceCreate from './Invoices/InvoiceCreate'
import InvoiceUpdate from './Invoices/InvoiceUpdate'
import Customers from './Customers'
import Products from './Products'
import NotFoundPage from './NotFoundPage'

class Layout extends Component {

  getInvoiceUpdate = ({match}) => {
    const {id} = match.params
    return <InvoiceUpdate id = {id} />
  }

  render(){
    return (
      <Grid>
        <Row className="show-grid">
          <Switch>
            <Route path = "/invoices/new" component = {InvoiceCreate} exact />
            <Route path = "/invoices/:id/edit" render = {this.getInvoiceUpdate} exact />
            <Route path = "/invoices" component = {Invoices} />
            <Route path = "/customers" component = {Customers} />
            <Route path = "/products" component = {Products} />
            <Route path = "*" render = {NotFoundPage} />
          </Switch>
        </Row>
      </Grid>
    );
  }
}

export default Layout;
