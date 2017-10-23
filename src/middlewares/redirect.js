import history from '../history'

export default store => next => action => {
  const {redirect, ...rest} = action;

  if (redirect && redirect.nextUrl && redirect.method)
    history[redirect.method](redirect.nextUrl)

  return next(action)
}