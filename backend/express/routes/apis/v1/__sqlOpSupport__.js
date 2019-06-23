const flags = require('../../__flags__');
const flagCode = flags.flags();

const mysqlUserOp = require('../../../db/sql/userSqlOp');
const mysqlArticleOp = require('../../../db/sql/articleSqlOp');



function blockLogin(blockFlag, req, res, next) {
  let checkMode = (blockFlag.toUpperCase() === 'LOGIN') ? true : false;

  if (checkMode) {
    if (req.session.logIn) {
      res.status(400);
      res.send({
        'success': false,
        'flag': flagCode.ERROR_ALREADY_LOGGED_IN,
      });
      return false;
    }
  } else {
    if (!(req.session.logIn)) {
      res.status(400);
      res.send({
        'success': false,
        'flag': flagCode.ERROR_NOT_LOGGED_IN,
      });
      return false;
    }
  }

  return true;
}

function checkSQLConnection(error, mysqlPool, connection, flag) {
  if (error) {
    console.log(error);
    res.status(500);
    res.send({
      'success': false,
      'flag': flag,
      'error': error,
    });
    mysqlPool.releaseConnection(connection);
    return false;
  } else {
    return true;
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

module.exports = {
  blockLogin,
  checkSQLConnection,
  sendAndCloseConnection,
  getLoggedInUserData,
};