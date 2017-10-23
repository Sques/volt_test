import {mapToArr} from '../helpers'

export const getCustomers = (state) => mapToArr(state.customers.entities);
export const getProducts = (state, type) => {
  switch(type){
    case 'obj':
      return state.products.entities.toObject()

    default:
      return mapToArr(state.products.entities);
  }
}
export const getInvoices = (state) => mapToArr(state.invoices.entities);

export const getEntities = (state, entity, dataType) =>{
  switch(dataType){
    case 'object':
      return state[entity].entities.toObject()

    default:
      return mapToArr(state[entity].entities);
  }
}

export const getInvoiceProductList = (state) => mapToArr(state.invoiceDetail.productList)

export const getInvoiceTotalPrice = (state) => {
  const {discount, productList} = state.invoiceDetail
  let items = mapToArr(productList)
  let price = 0;
  if (items && !items.length) return price

  for(let i = 0; i < items.length; i++)
    price += items[i].price*items[i].qty

  if(discount > 0)
    price = price - price * (discount / 100);

  return price.toFixed(2);
}