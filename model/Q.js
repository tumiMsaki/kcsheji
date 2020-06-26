import query from '../init'

exports.Q = (value) => {
  let _sql = `insert into uuid(user_uuid) values(?);`
  return query(_sql, value)
}