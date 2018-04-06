import rh from '_/util/response.handler'

class AuthController {
  static signin (req, res) {
    return rh(res, 200, { message: 'signin success' })
  }

  static signup (req, res) {
    return rh(res, 200, { message: 'signup success' })
  }
}

export default AuthController
