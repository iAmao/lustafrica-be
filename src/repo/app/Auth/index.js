import routes from './routes'
import routeHandler from '_/util/route.handler.js'

export default (router) => {
  routeHandler(routes, router)
}
