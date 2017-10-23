import {
  START, SUCCESS, FAIL,
  LOAD_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER,
  LOAD_PRODUCTS,
  LOAD_INVOICES,
  CHANGE_INVOICE, ADD_INVOICE_PRODUCT, DELETE_INVOICE_PRODUCT, CHANGE_INVOICE_PRODUCT_QTY,
  ADD_INVOICE
} from '../constants'

export function loadCustomers(){
  return {
    type: LOAD_CUSTOMERS,
    callAPI: '/api/customers'
  }
}

/* CUSTOMER */
export function addCustomer(customer){
  return {
    type: ADD_CUSTOMER,
    callAPI: '/api/customers',
    apiOptions: {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }
  }
}

export function deleteCustomer(id){
  return {
    type: DELETE_CUSTOMER,
    callAPI: `/api/customers/${id}`,
    apiOptions: {
      method: 'DELETE'
    }
  }
}

export function updateCustomer(customer){
  return {
    type: UPDATE_CUSTOMER,
    callAPI: `/api/customers/${customer.id}`,
    apiOptions: {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }
  }
}

/* PRODUCTS */
export function loadProducts(){
  return {
    type: LOAD_PRODUCTS,
    callAPI: '/api/products'
  }
}

/* INVOICES */
export function loadInvoices(){
  return {
    type: LOAD_INVOICES,
    callAPI: '/api/invoices'
  }
}

/* INVOICE DETAIL */
export function changeInvoice(type, value){
  return {
    type: CHANGE_INVOICE,
    payload: {
      type,
      value
    }
  }
}

export function addInvoiceProduct(product){
  return {
    type: ADD_INVOICE_PRODUCT,
    payload: {product}
  }
}

export function deleteInvoiceProduct(id){
  return {
    type: DELETE_INVOICE_PRODUCT,
    payload: {id}
  }
}

export function changeInvoiceProductQty(id, qty){
  return {
    type: CHANGE_INVOICE_PRODUCT_QTY,
    payload: {id, qty}
  }
}

export function addInvoice(invoice, totalPrice, invoiceList){
  /* @todo add invoice products */
  return {
    type: ADD_INVOICE,
    callAPI: `/api/invoices`,
    apiOptions: {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customer_id: invoice.customer.value,
        discount: invoice.discount,
        total: totalPrice
      })
    },
    redirect: {
      method: 'push',
      nextUrl: '/invoices'
    }
  }
}