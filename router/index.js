import Route from 'koa-router'
import {Q} from './Q'
import {W} from './W'

const router = new Route()

router.use(Q.routes())
router.use(W.routes())

module.exports = router