import query from '../init'

exports.Q = (value) => {
  let _sql = `insert into users_t(user_uuid, temperature) values(?, ?);`
  return query(_sql, value)
}