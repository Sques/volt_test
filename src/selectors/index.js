import {mapToArr} from '../helpers'

export const getCustomers = (state) => mapToArr(state.customers.entities);
export const getProducts = (state) => mapToArr(state.products.entities);