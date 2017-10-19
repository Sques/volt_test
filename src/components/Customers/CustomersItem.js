import React, {Component} from 'react';

class CustomersItem extends Component{

  updateItem = () => {
    const {handleUpdateModal, customer} = this.props;
    handleUpdateModal(customer)
  };

  deleteItem = () => {
    const {handleDeleteModal, customer} = this.props;
    handleDeleteModal(customer.id)
  };

  render(){
    const {id, name, address, phone} = this.props.customer;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td onClick = {this.updateItem} className="crud-icon"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></td>
        <td onClick = {this.deleteItem} className="crud-icon"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
      </tr>
    )
  }
}

export default CustomersItem;