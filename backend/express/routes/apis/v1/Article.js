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
const sqlOpSupport = require('./__sqlOpSupport__');

// Build a connection pool for sql connection
const mysqlPool = mysql.createPool(mysqlConfig.mysql);

const multipartMiddleware = multipart();
const flagCode = flags.flags();
const uuidv1 = require('uuid/v1');

router.get('/', (req, res, next) => {
  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (!sqlOpSupport.checkSQLConnection(err, mysqlPool, connection, flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR)) return;

  });
});

router.post('/', multipartMiddleware, (req, res, next) => {
  let routerInfo = [req, res, next];
  let blockUsers = 'NOT_LOGIN';
  if (!sqlOpSupport.verifyLogin(routerInfo, blockUsers)) return;

  // Get connection from connection pool
  mysqlPool.getConnection(async (err, connection) => {
    try {
      if (err) { sqlOpSupport.sendOnSQLConnectionError(routerInfo, err); return; };

      let inputInfo = [
        article_id,
        title,
        author_id,
        content,
      ] = [
        // uuidv1(),
        'fixed_uuid_for_testing',
        req.body.title,
        req.session.logInUser,
        req.body.content,
      ];
  
      let sendData;
      let userData = await sqlOpSupport.getLoggedInUserData(routerInfo, mysqlPool, connection);
  
      await new Promise ((resolve, reject) => {
        connection.query(mysqlArticleOp.insertNew, inputInfo, (error, results, fields) => {
          if (error) { sqlOpSupport.sendOnSQLConnectionError(routerInfo, error); reject(error); };
          resolve(results);
        })
      })
  
      connection.query(mysqlArticleOp.queryById, article_id, (error, results, fields) => {
        if (error) { sqlOpSupport.sendOnSQLConnectionError(routerInfo, error); return; };
        let createdArticle = results[0];
        sendData = {
          'article': {
            'article_id': createdArticle.article_id,
            'title': createdArticle.title,
            'created_at': createdArticle.created_at,
            'last_modified_at': createdArticle.last_modified_at,
            'author': userData,
            'content': createdArticle.content,
          },
        };
  
        sqlOpSupport.sendAndCloseConnection(res, mysqlPool, connection, sendData);
      });
    } catch (error) {
      console.log(error)
    }
  });
});

router.put('/id', multipartMiddleware, (req, res, next) => {
  if (!sqlOpSupport.verifyLogin('NOT_LOGIN', req, res, next)) return;

  // Get connection from connection pool
  mysqlPool.getConnection(async (err, connection) => {
    if (!sqlOpSupport.checkSQLConnection(err, mysqlPool, connection, flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR)) return;

    let inputInfo = [
      article_id,
      title,
      user_id,
      content,
    ] = [
      req.body.article_id,
      req.body.title,
      req.session.logInUser,
      req.body.content,
    ];

    let sendData;
    let articleData = await sqlOpSupport.getArticleDataById(req, mysqlPool, connection, article_id);
    articleData = articleData[0];

    // If the given article id is not existed, reject operation
    if (articleData === undefined) {
      sendData = {
        'success': false,
        'flag': flagCode.ERROR_ARTICLE_NOT_FOUND,
      }
    } else {
      let userData = await sqlOpSupport.getUserDataById(req, mysqlPool, connection, articleData.author_id);
      userData = userData[0]

      // If the user is not the author of the article, reject operation
      if (userData.uuid !== user_id) {
        sendData = {
          'success': false,
          'flag': flagCode.ERROR_NOT_AUTHORIZED,
        }
      } else {
        // Operate database, update value
        connection.query(mysqlArticleOp.updateById, [title, content, article_id], (error, results, fields) => {
          if (!sqlOpSupport.checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
        });

        // Obtain opertaion results
        articleData = await sqlOpSupport.getArticleDataById(req, mysqlPool, connection, article_id);
        articleData = articleData[0];
        sendData = {
          'article': {
            'article_id': articleData.article_id,
            'title': articleData.title,
            'created_at': articleData.created_at,
            'last_modified_at': articleData.last_modified_at,
            'author': userData,
            'content': articleData.content,
          },
        };
      }
    }
    sqlOpSupport.sendAndCloseConnection(res, mysqlPool, connection, sendData);
  });
});

module.exports = router;
