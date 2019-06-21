// Use express module
const express = require('express');
const multipart = require('connect-multiparty');
const router = express.Router();

// Use SQL modules with our configs
const mysql = require('mysql');
const mysqlConfig = require('../../../db/sql/sqlConfigs');
const mysqlUserOp = require('../../../db/sql/userSqlOp');
const mysqlArticleOp = require('../../../db/sql/articleSqlOp');
const flags = require('../../__flags__');
const supportCommunicationMethods = require('./__communicationSupport__');

// Build a connection pool for sql connection
const mysqlPool = mysql.createPool(mysqlConfig.mysql);

const multipartMiddleware = multipart();
const flagCode = flags.flags();
const uuidv1 = require('uuid/v1');

router.get('/postall', (req, res, next) => {
  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (!supportCommunicationMethods.checkSQLConnection(err, mysqlPool, connection, flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR)) return;


  });
});

module.exports = router;
