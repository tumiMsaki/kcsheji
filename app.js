import Koa from 'koa'
import bodyParser from 'koa-bodyparser';
import index from './router'

const app = new Koa()
const PORT = 3030

app.use(bodyParser());
app.use(index.routes())
app.server = app.listen(PORT)

module.exports = app