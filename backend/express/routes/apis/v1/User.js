// Use express module
var express = require('express');
var router = express.Router();

// Use SQL modules with our configs
var mysql = require('mysql');
var mysqlConfig = require('../../../db/sql/sqlConfigs');
var mysqlUserOp = require('../../../db/sql/userSqlOp');

// Build a connection pool for sql connection
var mysqlPool = mysql.createPool(mysqlConfig.mysql);

// User login
// DO NOT use 'get' here. Use 'post' to secure user's password.
router.post('/Login', (req, res, next) => {
  // Get connection from connection pool
  // mysqlPool.getConnection((err, connection) => {
  //   if (err) throw (err);

  //   console.log(req.body);
  // });
  res.send(req.body);
});

module.exports = router;
