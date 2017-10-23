import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import api from '../middlewares/api'
import redirect from '../middlewares/redirect'

const enhancer = applyMiddleware(api, redirect)

const store = createStore(reducer, {}, enhancer)

export default store