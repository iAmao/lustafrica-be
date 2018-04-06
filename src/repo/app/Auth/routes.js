import Controller from './controller'

export default [
  ['get', '/auth/signin', Controller.signin],
  ['get', '/auth/signup', Controller.signup]
]
