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
const supportCommunicationMethods = require('./__sqlOpSupport__');

// Build a connection pool for sql connection
const mysqlPool = mysql.createPool(mysqlConfig.mysql);

const multipartMiddleware = multipart();
const flagCode = flags.flags();
const uuidv1 = require('uuid/v1');

router.get('/', (req, res, next) => {
  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (!supportCommunicationMethods.checkSQLConnection(err, mysqlPool, connection, flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR)) return;

  });
});

router.post('/create', multipartMiddleware, (req, res, next) => {
  if (!supportCommunicationMethods.blockLogin('NOT_LOGIN', req, res, next)) return;

  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (!supportCommunicationMethods.checkSQLConnection(err, mysqlPool, connection, flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR)) return;

    let inputInfo = [
      article_id,
      title,
      author_id,
      content,
    ] = [
      uuidv1(),
      req.body.title,
      req.session.logInUser,
      req.body.content,
    ]

    let sendData;
    let userData = supportCommunicationMethods.getLoggedInUserData(req, connection);

    connection.query(mysqlArticleOp.insertNew, inputInfo, (error, results, fields) => {
      if (!supportCommunicationMethods.checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
    });

    connection.query(mysqlArticleOp.queryById, article_id, (error, results, fields) => {
      if (!supportCommunicationMethods.checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
      
      sendData = {
        'userdata': userData,
        'article': results,
      };

      supportCommunicationMethods.sendAndCloseConnection(res, mysqlPool, connection, sendData);
    });



  });
});

module.exports = router;
