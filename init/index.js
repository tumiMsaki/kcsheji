import mysql from 'mysql'

const pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'yym891230',
  database : 'zhaoyangsb',
  port     : 3306
});

let query = function(sql, value) {
  return new Promise((res, rej) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        rej(err)
      } else {
        connection.query(sql, value, (err, rows) => {
          if (err) {
            rej(err)
          } else {
            res(rows)
          }

          connection.release()
        })
      }
    })
  })
}

let users_t =
    `create table if not exists users_t(
     id INT NOT NULL AUTO_INCREMENT,
     user_uuid VARCHAR(100) NOT NULL,
     temperature VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let users_m =
    `create table if not exists users_m(
      id INT NOT NULL AUTO_INCREMENT,
      user_uuid VARCHAR(100) NOT NULL,
      punch VARCHAR(100) NOT NULL,
      PRIMARY KEY ( id )
    );`

let createTable = function(sql) {
  return query(sql, [])
}

createTable(users_m)
createTable(users_t)

module.exports = query