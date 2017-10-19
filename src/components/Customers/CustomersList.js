import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Table, Button, Modal} from 'react-bootstrap'

import {loadCustomers, deleteCustomer} from '../../AC'
import {getCustomers} from '../../selectors'

import CustomersItem from './CustomersItem'
import CustomersUpdateForm from './CustomersUpdateForm'
import Loader from '../Loader'

class CustomersList extends Component {

  state = {
    showModalDeleteItem: false,
    deleteItemId: null,
    showModalUpdateItem: false,
    updateItem: null
  }

  componentDidMount(){
    this.props.loadCustomers();
  }

  openModalDeleteItem = (id) => {
    return this.setState({
      showModalDeleteItem: true,
      deleteItemId: id
    })
  }

  deleteItem = () => {
    const id = this.state.deleteItemId
    if (!id) return null
    this.props.deleteCustomer(id)
    this.closeModalDeleteItem();
  }

  closeModalDeleteItem = () =>{
    return this.setState({
      showModalDeleteItem: false,
      deleteItemId: null
    })
  }

  openModalUpdateItem = (customer) => {
    return this.setState({
      showModalUpdateItem: true,
      updateItem: customer
    })
  }

  closeModalUpdateItem = () =>{
    return this.setState({
      showModalUpdateItem: false,
      updateItem: null
    })
  }

  render(){

    const {customers, loading, deleteCustomer} = this.props;

    if (loading) return <Loader/>

    if (!customers && !customers.length) return null

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

        <Modal show={this.state.showModalDeleteItem} onHide={this.closeModalDeleteItem}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Delete Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModalDeleteItem}>Cancel</Button>
            <Button bsStyle={'danger'} onClick={this.deleteItem}>Delete</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalUpdateItem} onHide={this.closeModalUpdateItem}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Update Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CustomersUpdateForm item={this.state.updateItem} handleUpdateModal={this.closeModalUpdateItem} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModalUpdateItem}>Cancel</Button>
          </Modal.Footer>
        </Modal>

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
  { loadCustomers, deleteCustomer }
)(CustomersList);

