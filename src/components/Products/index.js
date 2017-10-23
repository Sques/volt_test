import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet"
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap'

import { loadProducts } from '../../AC'
import { getEntities } from '../../selectors'

import Loader from '../Loader'

class Products extends Component {

  componentDidMount(){
    this.props.loadProducts();
  }

  render(){
    const {products, loading} = this.props;

    if (loading) return <Loader/>

    if (products && !products.length) return <h4>No items</h4>

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

        <Helmet>
          <title>Products</title>
        </Helmet>

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

Products.propTypes = {
  //from connect
  products: PropTypes.array.isRequired,
  loading: PropTypes.string
}

export default connect(
  (state) => {
    const {loading} = state
    return {
      products: getEntities(state, 'products'),
      loading
    }
  },
  { loadProducts }
)(Products);