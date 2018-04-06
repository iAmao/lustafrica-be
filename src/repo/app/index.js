import auth from '_/Auth'

function compose (router) {
  auth(router)
}

export default compose
