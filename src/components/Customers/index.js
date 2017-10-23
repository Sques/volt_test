import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {Button, Modal} from 'react-bootstrap'

import CustomersList from './CustomersList'
import FormCustomerAdd from './FormCustomerAdd'

class Customers extends Component {

  state = {
    showModalAddItem: false
  }

  openModalAddItem = () => this.setState({showModalAddItem: true})

  closeModalAddItem = () => this.setState({showModalAddItem: false})

  render(){

    return (
      <div>

        <Helmet>
          <title>Customers</title>
        </Helmet>

        <h1 className="pull-left">Customer list</h1>
        <Button bsClass="btn btn-default btn-create-center" onClick={this.openModalAddItem}>Create</Button>

        <CustomersList />

        <Modal show={this.state.showModalAddItem} onHide={this.closeModalAddItem}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Add Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCustomerAdd />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModalAddItem}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Customers;