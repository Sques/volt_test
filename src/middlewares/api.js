import {
  START, SUCCESS, FAIL
} from '../constants'

export default store => next => (action) => {

  const {callAPI, apiOptions, type, ...rest} = action;

  if (!callAPI) return next(action)

  next({...rest, type: type + START})

  fetch(callAPI, apiOptions || {})
    .then(res => res.json())
    .then(response => next({...rest, type: type + SUCCESS, response}))
    .catch(error => next({...rest, type: type + FAIL, error}))
}