import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Table, Button, Modal} from 'react-bootstrap'

import {loadCustomers, deleteCustomer} from '../../AC'
import {getEntities} from '../../selectors'

import CustomersItem from './CustomersItem'
import FormCustomerUpdate from './FormCustomerUpdate'
import Loader from '../Loader'

const initialState = {
  showModalDeleteItem: false,
  deleteItemId: null,
  showModalUpdateItem: false,
  updateItem: null
}

class CustomersList extends Component {

  state = initialState

  componentDidMount(){
    this.props.loadCustomers();
  }

  openModalDeleteItem = id => (
    this.setState({
      showModalDeleteItem: true,
      deleteItemId: id
    })
  )

  openModalUpdateItem = customer => (
    this.setState({
      showModalUpdateItem: true,
      updateItem: customer
    })
  )

  closeModal = () => this.setState(initialState)

  deleteItem = () => {
    const id = this.state.deleteItemId
    if (!id) return null
    this.props.deleteCustomer(id)
    this.setState(initialState)
  }

  render(){

    const {customers, loading, deleteCustomer} = this.props;

    if (loading) return <Loader/>
    if (customers && !customers.length) return <h4>No items</h4>

    const customerItems = customers.map(customer => (
      <CustomersItem
        key={customer.id}
        customer={customer}
        handleDeleteModal={this.openModalDeleteItem}
        handleUpdateModal={this.openModalUpdateItem}
      />
    ))

    return (
      <div>

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

        <Modal show={this.state.showModalDeleteItem} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Delete Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Cancel</Button>
            <Button bsStyle={'danger'} onClick={this.deleteItem}>Delete</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalUpdateItem} onHide={this.closeModalUpdateItem}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Update Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCustomerUpdate item={this.state.updateItem} handleUpdateModal={this.closeModal} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModalUpdateItem}>Cancel</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

CustomersList.propTypes = {
  //from connect
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default connect(
  (state) => {
    const {loading} = state.customers
    return {
      customers: getEntities(state, 'customers'),
      loading
    }
  },
  { loadCustomers, deleteCustomer }
)(CustomersList);

