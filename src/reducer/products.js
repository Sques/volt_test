import {
  START, SUCCESS, FAIL,
  LOAD_PRODUCTS
} from '../constants'

import {Record} from 'immutable'
import {arrToMap} from '../helpers'

const productRecord = Record({
  id: null,
  name: null,
  price: null
})

const ReducerState = Record({
  entities: arrToMap([]),
  loading: false,
  loaded: false
})

export default ( state = new ReducerState, {type, response} ) => {
  switch(type){
    case LOAD_PRODUCTS + START:
      return state.set('loading', true);
    case LOAD_PRODUCTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, productRecord))
        .set('loading', false)
        .set('loaded', true)
    default:
      return state
  }
}