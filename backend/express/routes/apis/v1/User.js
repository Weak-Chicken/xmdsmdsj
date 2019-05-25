// Use express module
var express = require('express');
var multipart = require('connect-multiparty');
var router = express.Router();

// Use SQL modules with our configs
var mysql = require('mysql');
var mysqlConfig = require('../../../db/sql/sqlConfigs');
var mysqlUserOp = require('../../../db/sql/userSqlOp');
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
        req.body.uuid,
        req.body.userName,
        req.body.userPwd,
      ];

    connection.query(mysqlUserOp.getUserById, [uuid], (error, results, fields) => {
      if (error) throw (error);

      res.send({
        'results': results,
        'fields': fields
      })

    // Release the connection
    // connection.release(); // might not work
    mysqlPool.releaseConnection(connection);
    });

    // res.send({
    //   'uuid': uuid,
    //   'userName': userName,
    //   'userPwd': userPwd,
    //   'sql': sqlExample,
    // })

  });
});

module.exports = router;
