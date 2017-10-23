import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateCustomer} from '../../AC'

import {Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

const initialState = {
  name: '',
  address: '',
  phone: ''
}

class CustomersAddForm extends Component {

  constructor(props) {
    super(props);
    const {id, name, address, phone} = this.props.item
    this.state = {id, name, address, phone};
  }

  handleChange = type => ev => {
    const {value} = ev.target
    this.setState({
      [type]: value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const {updateCustomer, handleUpdateModal} = this.props
    updateCustomer(this.state)
    handleUpdateModal();
    this.setState(initialState)
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit} className="form-horizontal">
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange('name')} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Address
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange('address')} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Phone
          </Col>
          <Col sm={10}>
            <FormControl type="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange('phone')} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsClass="btn btn-primary pull-right" type="submit">Update Customer</Button>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

CustomersAddForm.propTypes = {
  //from props
  item: PropTypes.array.isRequired,
  handleUpdateModal: PropTypes.func.isRequired
}

export default connect(
  null,
  { updateCustomer }
)(CustomersAddForm);
