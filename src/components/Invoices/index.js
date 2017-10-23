import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import InvoicesList from './InvoicesList'

class Invoices extends Component {

  state = {
    showModalAddItem: false
  }

  openModalAddItem = () => this.setState({showModalAddItem: true})

  closeModalAddItem = () => this.setState({showModalAddItem: false})

  render(){

    return (
      <div>
        <Helmet>
          <title>Invoices</title>
        </Helmet>

        <h1 className="pull-left">Invoice list</h1>
        <Link to = {`/invoices/new`}>
          <Button bsClass="btn btn-default btn-create-center">Create</Button>
        </Link>

        <InvoicesList />

        <Modal show={this.state.showModalAddItem} onHide={this.closeModalAddItem}>
          <Modal.Header closeButton>
            <Modal.Title bsClass="modal-title text-center">Add Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ADD FORM
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModalAddItem}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Invoices;