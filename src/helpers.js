import { Map, OrderedMap, fromJS } from 'immutable'

export function arrToMap(arr, RecordScheme = Map) {
  return arr.reduce((acc, entity) => acc.set(entity.id, new RecordScheme(entity)), new OrderedMap({}))
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray()
}