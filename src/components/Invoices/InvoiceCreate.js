import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'
import Select from 'react-select'

import {
  getProducts, getCustomers,
  getInvoiceTotalPrice, getInvoiceProductList
} from '../../selectors'
import {
  loadCustomers, loadProducts,
  changeInvoice, addInvoiceProduct,
  addInvoice
} from '../../AC'

import InvoiceProductList from './InvoiceProductList'

class InvoiceCreate extends Component {

  componentDidMount(){
    const {loadCustomers, loadProducts} = this.props
    loadCustomers();
    loadProducts();
  }

  render(){

    const {
      customers, arProducts, invoice,
      invoiceList, totalPrice
    } = this.props

    const customerItems = customers.map(customer => ({
      label: customer.name,
      value: customer.id
    }))

    const productItems = arProducts.map(product => ({
      label: product.name,
      value: product.id
    }))

    return (
      <div>
        <h1>Edit Invoice</h1>
        <form onSubmit = {this.handleSubmit} className="form-horizontal">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Discount (%)
            </Col>
            <Col sm={10}>
              <FormControl
                type="number"
                placeholder="Discount"
                value={invoice.discount}
                onChange={this.handleChange('discount')}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Customer
            </Col>
            <Col sm={10}>
              <Select
                options={customerItems}
                onChange={this.handleChangeSelect('customer')}
                value={invoice.customer}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Product
            </Col>
            <Col sm={8}>
              <Select
                options={productItems}
                onChange={this.handleChangeSelect('product')}
                value={invoice.product}
              />
            </Col>
            <Col sm={2}>
              <Button bsClass="btn btn-default pull-right" onClick={this.handleAddInvoiceProduct}>Add Product</Button>
            </Col>
          </FormGroup>

          <InvoiceProductList items={invoiceList} />

          <h4>Total price: {totalPrice}</h4>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsClass="btn btn-success pull-right" type="submit">Add Invoice</Button>
            </Col>
          </FormGroup>

        </form>

      </div>
    );
  }

  handleChange = type => ev => {
    const {value} = ev.target
    this.props.changeInvoice(type, value)
  }

  handleChangeSelect = type => item => this.props.changeInvoice(type, item)

  handleAddInvoiceProduct = () => {
    const {objProducts, invoice, addInvoiceProduct} = this.props
    const price = objProducts[invoice.product.value].price
    if(!invoice.product.value || !price) return null
    const product = {
      ...invoice.product,
      price
    };
    addInvoiceProduct(product)
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const {addInvoice, invoice, totalPrice, invoiceList } = this.props
    addInvoice(invoice, totalPrice, invoiceList)
  }

}

export default connect(
  (state) => ({
    customers: getCustomers(state),
    arProducts: getProducts(state, 'arr'),
    objProducts: getProducts(state, 'obj'),
    invoice: state.invoiceDetail,
    invoiceList: getInvoiceProductList(state),
    totalPrice: getInvoiceTotalPrice(state)
  }),
  {
    loadCustomers, loadProducts,
    changeInvoice, addInvoiceProduct,
    addInvoice
  }
)(InvoiceCreate);
