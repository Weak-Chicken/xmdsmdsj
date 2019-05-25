// Use express module
var express = require('express');
var multipart = require('connect-multiparty');
var router = express.Router();

// Use SQL modules with our configs
var mysql = require('mysql');
var mysqlConfig = require('../../../db/sql/sqlConfigs');
var mysqlUserOp = require('../../../db/sql/userSqlOp');
var flagCode = require('../../__flags__');
var multipartMiddleware = multipart();

// Build a connection pool for sql connection
var mysqlPool = mysql.createPool(mysqlConfig.mysql);

// User login
// DO NOT use 'get' here. Use 'post' to secure user's password.
router.post('/Login', multipartMiddleware, (req, res, next) => {
  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (err) throw (err);

    let [
      uuid,
      userName,
      userPwd,
    ] = [
        parseInt(req.body.uuid),
        req.body.userName,
        req.body.userPwd,
      ];

    connection.query(mysqlUserOp.getUserById, [uuid], (error, results, fields) => {
      if (error) throw (error);
      
      // res.send({
      //   'results': results
      // });

      // console.log(results);
      // console.log(results.uuid);
      // console.log(results[0]);
      // console.log(results[0].uuid);
      if (results.length === 0) { // TODO: improve here!
        res.send({
          'success': false,
          'flag': flagCode.ERROR_USER_NOT_FOUND
        });
        return;
      }

      results = results[0]
      // console.log([uuid,userName,userPwd]);
      if ((results.uuid == uuid) && (results.userName == userName) && (results.pwd == userPwd)) {
        res.send({
          'success': true,
          'flag': flagCode.INFO_USER_LOGIN_SUCCEEDED,
          'userData': results,
        });
      } else {
        if (results.uuid != uuid) {
          res.send({
            'success': false,
            'flag': flagCode.ERROR_USER_UUId_WRONG
          });
          // console.log('expected:', results.uuid, typeof(results.uuid))
          // console.log('received:', uuid, typeof(uuid))
          return;
        }
        if (results.userName != userName) {
          res.send({
            'success': false,
            'flag': flagCode.ERROR_USER_NAME_WRONG
          });
          return;
        }
        if (results.pwd != userPwd) {
          res.send({
            'success': false,
            'flag': flagCode.ERROR_USER_PASSWORD_WRONG
          });
          return;
        } else {
          res.send({
            'success': false,
            'flag': flagCode.ERROR_USER_PASSWORD_WRONG
          });
          return;
        }
      }
      });
    // Release the connection
    // connection.release(); // might not work
    mysqlPool.releaseConnection(connection);
  });
});

module.exports = router;
