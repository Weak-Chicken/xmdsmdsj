const flags = require('../../__flags__');
const flagCode = flags.flags();

const mysqlUserOp = require('../../../db/sql/userSqlOp');
const mysqlArticleOp = require('../../../db/sql/articleSqlOp');

function verifyLogin([req, res, next], blockFlag) {
  let checkMode = (blockFlag.toUpperCase() === 'LOGIN') ? true : false;

  if (checkMode) {
    if (req.session.logIn) {
      res.status(400);
      res.send({
        'success': false,
        'flag': flagCode.ERROR_ALREADY_LOGGED_IN,
      });
      throw new Error('User Already Logged in');
    }
  } else {
    if (!(req.session.logIn)) {
      res.status(400);
      res.send({
        'success': false,
        'flag': flagCode.ERROR_NOT_LOGGED_IN,
      });
      throw new Error('User Not Logged in');
    }
  }
}

function sendOnSQLConnectionError([req, res, next], error) {
  if (error) {
    console.log(error);
    res.status(500);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_UNKNOWN_SQL_CONNECTION_ERROR,
      'error': error,
    });
  }
}

function sendAndCloseConnection(res, mysqlPool, connection, data) {
  res.send(data);

  // Release the connection
  // connection.release(); // might not work
  mysqlPool.releaseConnection(connection);
}

function getLoggedInUserData(req, mysqlPool, connection) {
  return new Promise ((resolve) => {
    connection.query(mysqlUserOp.getUserById, req.session.logInUser, (error, results, fields) => {
      if (!checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
      resolve(results);
    });
  })
}

function getUserDataById(req, mysqlPool, connection, userId) {
  return new Promise ((resolve) => {
    connection.query(mysqlUserOp.getUserById, [userId], (error, results, fields) => {
      if (!checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
      resolve(results);
    });
  })
}

function getArticleDataById(req, mysqlPool, connection, articleId) {
  return new Promise ((resolve) => {
    connection.query(mysqlArticleOp.queryById, [articleId], (error, results, fields) => {
      if (!checkSQLConnection(error, mysqlPool, connection, flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR)) return;
      resolve(results);
    });
  })
}

module.exports = {
  verifyLogin,
  sendOnSQLConnectionError,
  sendAndCloseConnection,
  getLoggedInUserData,
  getUserDataById,
  getArticleDataById,
};