import {combineReducers} from 'redux'
import customers from './customers'
import products from './products'
import invoices from './invoices'
import invoiceDetail from './invoiceDetail'

export default combineReducers({
  customers,
  products,
  invoices,
  invoiceDetail
})