import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap'

import { loadProducts } from '../../AC'
import { getProducts } from '../../selectors'

import Loader from '../Loader'

class Products extends Component {

  componentDidMount(){
    this.props.loadProducts();
  }

  render(){
    const {products, loading} = this.props;

    if (loading) return <Loader/>

    if (products && products.length) console.log('Render Products', products)

    const productItems = products.map(({id, name, price}) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
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
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {productItems}
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
      products: getProducts(state),
      loading
    }
  },
  { loadProducts }
)(Products);