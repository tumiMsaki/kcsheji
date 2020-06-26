import query from '../init'

exports.W = (value) => {
  let _sql = `insert into users_m(user_uuid, punch) values(?, ?);`
  return query(_sql, value)
}