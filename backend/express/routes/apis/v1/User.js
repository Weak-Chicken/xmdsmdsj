// Use express module
let express = require('express');
let multipart = require('connect-multiparty');
let router = express.Router();

// Use SQL modules with our configs
let mysql = require('mysql');
let mysqlConfig = require('../../../db/sql/sqlConfigs');
let mysqlUserOp = require('../../../db/sql/userSqlOp');
let flags = require('../../__flags__');

let multipartMiddleware = multipart();
let flagCode = flags.flags();

// Build a connection pool for sql connection
let mysqlPool = mysql.createPool(mysqlConfig.mysql);

// User login
// DO NOT use 'get' here. Use 'post' to secure user's password.
router.post('/login', multipartMiddleware, (req, res, next) => {
  if (req.session.logIn) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_ALREADY_LOGGED_IN,
    });
    return;
  }

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
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR,
          'error': error,
        });
        return;
      }
      
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
      if ((results.uuid == uuid) && (results.userName == userName) && (results.userPwd == userPwd)) {
        req.session.logIn = true;
        req.session.logInUser = results.uuid;

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
        if (results.userPwd != userPwd) {
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

// User register
// DO NOT use 'get' here. Use 'post' to secure user's password.
router.post('/register', multipartMiddleware, (req, res, next) => {
  if (req.session.logIn) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_ALREADY_LOGGED_IN,
    });
    return;
  }

  // Get connection from connection pool
  mysqlPool.getConnection((err, connection) => {
    if (err) throw (err);

    let [
      uuid,
      userName,
      userPwd,
      userEmail,
    ] = [
        parseInt(req.body.uuid),
        req.body.userName,
        req.body.userPwd,
        req.body.userEmail,
      ];

    connection.query(mysqlUserOp.insertSimplfied, [uuid, userName, userPwd, userEmail], (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_REGISTER_ERROR,
          'error': error,
        });
        return;
      };

      res.send({
        'success': true,
        'flag': flagCode.INFO_USER_REGISTER_SUCCEEDED,
      });

    });
    // Release the connection
    // connection.release(); // might not work
    mysqlPool.releaseConnection(connection);
  });
});

router.post('/getUserById', multipartMiddleware, (req, res, next) => {
  if (!(req.session.logIn)) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_NOT_LOGGED_IN,
    });
    return;
  }

  let uuid = parseInt(req.body.uuid);

  mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
    }

    connection.query(mysqlUserOp.getUserByIdNormal, [uuid], (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_LOGIN_ERROR,
          'error': error,
        });
        return;
      };

      res.send({
        'success': true,
        'userData': results,
      });
    });
  mysqlPool.releaseConnection(connection);
  });
});

router.post('/listUsers', multipartMiddleware, (req, res, next) => {
  if (!(req.session.logIn)) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_NOT_LOGGED_IN,
    });
    return;
  }

  mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
    }

    connection.query(mysqlUserOp.queryAllNormal, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_REGISTER_ERROR,
          'error': error,
        });
        return;
      };

      res.send({
        'success': true,
        'userData': results,
      });
    });
    mysqlPool.releaseConnection(connection);
  });
});

router.post('/getUserDetailsById', multipartMiddleware, (req, res, next) => {
  if (!(req.session.logIn)) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_NOT_LOGGED_IN,
    });
    return;
  }

  mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
    }

    let userData;
    connection.query(mysqlUserOp.getUserById, uuid, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_REGISTER_ERROR,
          'error': error,
        });
        return;
      };

      // userData = results
    });

    connection.query(mysqlUserOp.getUserByIdNormal, uuid, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_REGISTER_ERROR,
          'error': error,
        });
        return;
      };

      res.send({
        'success': true,
        'userData': results,
      });
    });
  });
  mysqlPool.releaseConnection(connection);
});

router.post('/listUsersDetails', multipartMiddleware, (req, res, next) => {
  if (!(req.session.logIn)) {
    res.status(400);
    res.send({
      'success': false,
      'flag': flagCode.ERROR_NOT_LOGGED_IN,
    });
    return;
  }

  mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
    }

    connection.query(mysqlUserOp.getUserByIdNormal, uuid, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send({
          'success': false,
          'flag': flagCode.ERROR_UNKNOWN_USER_REGISTER_ERROR,
          'error': error,
        });
        return;
      };

      res.send({
        'success': true,
        'userData': results,
      });
    });
  });
  mysqlPool.releaseConnection(connection);
});

module.exports = router;
