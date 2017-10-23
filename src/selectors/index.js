import {mapToArr} from '../helpers'

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