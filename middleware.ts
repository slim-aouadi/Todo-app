import { privateRouteMiddleware } from './middlewares/privateRouteMiddleware'
import { publicRouteMiddleware } from './middlewares/publicRouteMiddleware'
import { stackMiddlewares } from './middlewares/stackMiddlewares'

export default stackMiddlewares([privateRouteMiddleware, publicRouteMiddleware])
