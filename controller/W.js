import * as W from '../model/W'

exports.W = async ctx => {
  let {user_uuid, punch} = ctx.request.body
  await W.W([user_uuid, punch])
    .then(result => {
      if (result.insertId) {
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