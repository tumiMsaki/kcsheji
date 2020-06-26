import * as W from '../model/W'

exports.W = async ctx => {
  let {user_uuid} = ctx.request.body
  await W.W(user_uuid)
    .then(result => {
      if (result.length) {
        ctx.body = {
          code: 1,
          msg: 'ok'
        }
      } else {
        ctx.body = {
          code: 2,
          msg: 'fail'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: 5,
        msg: err
      }
    })
}