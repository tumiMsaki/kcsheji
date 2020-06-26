import query from '../init'

exports.W = (value) => {
  let _sql = `insert into uuid(user_uuid) values(?);`
  return query(_sql, value)
}