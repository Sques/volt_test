import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InvoiceUpdate extends Component {
  render(){
    return (
      <div>EDIT INVOICE WITH ID: {this.props.id}</div>
    );
  }
}

InvoiceUpdate.propTypes = {
  //from props
  id: PropTypes.string.isRequired
};

export default InvoiceUpdate;