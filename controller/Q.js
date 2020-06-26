import * as Q from '../model/Q'

exports.Q = async ctx => {
  let {user_uuid, temperature} = ctx.request.body
  await Q.Q([user_uuid, temperature])
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

// exports.Q = async ctx => {
//   let postData = await parsePostData(ctx);
//   console.log(postData);
//   ctx.response.body = {status:200,msg:'这是post测试的返回数据',data: postData};
// }

// function parsePostData( ctx ) {
//   return new Promise((resolve, reject) => {
//     try {
//       let postdata = "";
//       ctx.req.addListener('data', (data) => {
//         postdata += data
//       })
//       ctx.req.addListener("end",function(){
//         let parseData = parseQueryStr( postdata )
//         resolve( parseData )
//       })
//     } catch ( err ) {
//       reject(err)
//     }
//   })
// }

// function parseQueryStr( queryStr ) {
//   let queryData = {}
//   let queryStrList = queryStr.split('&')
//   console.log( queryStrList )
//   for ( let [ index, queryStr ] of queryStrList.entries() ) {
//     let itemList = queryStr.split('=')
//     queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//   }
//   return queryData
// }

// exports.Q = async ctx => {
//   let postData = ctx.request.body;
//   ctx.response.body = {
//     code: 1,
//     msg: postData
//   };
// }