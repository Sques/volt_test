import {
  START, SUCCESS, FAIL,
  LOAD_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER,
  LOAD_PRODUCTS
} from '../constants'

export function loadCustomers(){
  return {
    type: LOAD_CUSTOMERS,
    callAPI: '/api/customers'
  }
}

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

export function loadProducts(){
  return {
    type: LOAD_PRODUCTS,
    callAPI: '/api/products'
  }
}