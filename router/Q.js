import Router from 'koa-router'
import {Q} from '../controller/Q'

const route = new Router()

route.post('/Q', Q)

export {
  route as Q
}