import Router from 'koa-router'
import {W} from '../controller/W'

const route = new Router()

route.post('/W', W)

export {
  route as W
}