import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'

import {loadInvoices, loadCustomers} from '../../AC'
import {getEntities} from '../../selectors'

import Loader from '../Loader'
import InvoicesItem from './InvoicesItem'

class InvoicesList extends Component {

  componentDidMount(){
    const {loadInvoices, loadCustomers} = this.props
    loadInvoices();
    loadCustomers();
  }

  render(){

    const {
      invoices, customers,
      invoicesLoading, customersLoading
    } = this.props;

    if (invoicesLoading || customersLoading) return <Loader/>

    if (invoices && !invoices.length) return <h4>No items</h4>

    const invoiceItems = invoices.map(invoice => {
      const customer = customers[invoice.customer_id] || {};
      return (
        <InvoicesItem
          key={invoice.id}
          invoice={invoice}
          customer={customer}
        />
      )
    })

    return (
      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Discount</th>
          <th>Total</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {invoiceItems}
        </tbody>
      </Table>
    );
  }
}

InvoicesList.propTypes = {
  //from connect
  customers: PropTypes.object.isRequired,
  customersLoading: PropTypes.bool,
  invoices: PropTypes.array.isRequired,
  invoicesLoading: PropTypes.bool
}

export default connect(
  (state) => ({
      customers: getEntities(state, 'customers', 'object'),
      customersLoading: state.customers.loading,
      invoices: getEntities(state, 'invoices'),
      invoicesLoading: state.invoices.loading
  }),
  { loadInvoices, loadCustomers }
)(InvoicesList);