import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class InvoicesItem extends Component{

  render(){
    const {invoice, customer} = this.props
    return (
      <tr>
        <td>{invoice.id}</td>
        <td>{customer.name}</td>
        <td>{invoice.discount}</td>
        <td>{invoice.total}</td>
        <td>
          <Link to = {`/invoices/${invoice.id}/edit`}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default InvoicesItem;