import React from 'react';
import {Helmet} from "react-helmet";
import {Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import InvoicesList from './InvoicesList'

function Invoices(){
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

    </div>
  );
}

export default Invoices;