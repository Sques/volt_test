import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Table, FormControl} from 'react-bootstrap'

import {deleteInvoiceProduct, changeInvoiceProductQty} from '../../AC'

class InvoiceProductList extends Component {
  render(){
    const {items} = this.props;
    const itemsList = items.map((item) => {
      const {value, label, price, qty} = item
      return (
        <tr key={value}>
          <td>{label}</td>
          <td>{price}</td>
          <td>
            <FormControl
              type="number"
              placeholder="Qty"
              value={qty}
              onChange={this.handleChangeQty(value)}
            />
          </td>
          <td onClick = {this.deleteItem(value)} className="crud-icon">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </td>
        </tr>
      )
    })

    if (itemsList && !itemsList.length) return <h4>No Items</h4>

    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {itemsList}
          </tbody>
        </Table>
      </div>
    );
  }

  handleChangeQty = id => ev => this.props.changeInvoiceProductQty(id, ev.target.value)

  deleteItem = id => () => this.props.deleteInvoiceProduct(id)
}

export default connect(
  null,
  { deleteInvoiceProduct, changeInvoiceProductQty }
)(InvoiceProductList);
