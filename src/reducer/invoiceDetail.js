import {
  START, SUCCESS, FAIL,
  CHANGE_INVOICE,
  ADD_INVOICE_PRODUCT,
  DELETE_INVOICE_PRODUCT,
  CHANGE_INVOICE_PRODUCT_QTY
} from '../constants'

import {Record} from 'immutable'
import {arrToMap} from '../helpers'

const ReducerState = Record({
  discount: 0,
  customer: false,
  product: false,
  productList: arrToMap([])
})

const productRecord = Record({
  value: null,
  label: null,
  price: null,
  qty: 1
})

export default ( state = new ReducerState, action ) => {
  const {type, payload, response} = action
  switch(type){
    case CHANGE_INVOICE:
      return state
        .set(payload.type, payload.value)

    case ADD_INVOICE_PRODUCT:
      const {product} = payload;
      return state
        .setIn(['productList', product.value], new productRecord(product))

    case DELETE_INVOICE_PRODUCT:
      return state
        .deleteIn(['productList', payload.id])

    case CHANGE_INVOICE_PRODUCT_QTY:
      return state
        .setIn(['productList', payload.id, 'qty'], payload.qty)

    default:
      return state
  }
}