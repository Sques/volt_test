import {
  START, SUCCESS, FAIL,
  LOAD_CUSTOMERS, LOAD_PRODUCTS
} from '../constants'

export function loadCustomers(){
  return {
    type: LOAD_CUSTOMERS,
    callAPI: '/api/customers'
  }
}

export function loadProducts(){
  return {
    type: LOAD_PRODUCTS,
    callAPI: '/api/products'
  }
}