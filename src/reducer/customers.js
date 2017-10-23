import {
  START, SUCCESS, FAIL,
  LOAD_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER
} from '../constants'

import {Record} from 'immutable'
import {arrToMap} from '../helpers'

const customerRecord = Record({
  id: null,
  name: null,
  phone: null,
  address: null
})

const ReducerState = Record({
  entities: arrToMap([]),
  loading: false,
  loaded: false
})

export default ( state = new ReducerState, {type, payload, response} ) => {
  switch(type){
    case LOAD_CUSTOMERS + START:
      return state
        .set('loading', true);

    case LOAD_CUSTOMERS + SUCCESS:
      return state
        .set('entities', arrToMap(response, customerRecord))
        .set('loading', false)
        .set('loaded', true)

    case ADD_CUSTOMER + SUCCESS:
      return state
        .setIn(['entities', response.id], new customerRecord(response))

    case DELETE_CUSTOMER + SUCCESS:
      return state
        .deleteIn(['entities', response.id])

    case UPDATE_CUSTOMER + SUCCESS:
      return state
        .setIn(['entities', response.id], new customerRecord(response))

    default:
      return state
  }
}