import mysql from 'mysql'

const pool  = mysql.createPool({
  host     : 'localhost:3306',
  user     : 'zhaoyangsb',
  password : 'zhaoyangsb',
  database : 'zhaoyangsb'
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

let users =
    `create table if not exists uuid(
     id INT NOT NULL AUTO_INCREMENT,
     user_uuid VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`
  
let createTable = function(sql) {
  return query(sql, [])
}

createTable(users)

module.exports = query