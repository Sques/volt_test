import {
  START, SUCCESS, FAIL,
  LOAD_INVOICES,
  ADD_INVOICE_PRODUCT
} from '../constants'

import {Record} from 'immutable'
import {arrToMap} from '../helpers'

const recordScheme = Record({
  id: null,
  customer_id: null,
  discount: null,
  total: null
})

const ReducerState = Record({
  entities: arrToMap([]),
  loading: false,
  loaded: false
})

export default ( state = new ReducerState, {type, payload, response} ) => {
  switch(type){
    case LOAD_INVOICES + START:
      return state.set('loading', true);
    case LOAD_INVOICES + SUCCESS:
      return state
        .set('entities', arrToMap(response, recordScheme))
        .set('loading', false)
        .set('loaded', true)
    default:
      return state
  }
}