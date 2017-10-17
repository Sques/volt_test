import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap'

import { loadCustomers } from '../../AC'
import { getCustomers } from '../../selectors'

import Loader from '../Loader'

class Customers extends Component {

  componentDidMount(){
    this.props.loadCustomers();
  }

  render(){
    const {customers, loading} = this.props;

    if (loading) return <Loader/>

    if (customers && customers.length) console.log('Render Customers', customers)

    const customerItems = customers.map(({id, name, address, phone}) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td className="crud-icon"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
        <td className="crud-icon"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
      </tr>
    ))

    return (
      <div>
        <h1 className="pull-left">Customer list</h1>
        <Button bsClass="btn btn-default btn-create-center">Create</Button>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customerItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const {loading} = state
    return {
      customers: getCustomers(state),
      loading
    }
  },
  { loadCustomers }
)(Customers);