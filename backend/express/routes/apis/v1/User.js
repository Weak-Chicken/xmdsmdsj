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

    res.send({
      'uuid': uuid,
      'userName': userName,
      'userPwd': userPwd
    })

    // connection.query(mysqlUserOp.getUserById, (err, res, result) => {
    //   var isTrue = false;
    //   if(res){ //获取用户列表，循环遍历判断当前用户是否存在
    //       for (var i=0;i<res.length;i++) {
    //           if(res[i].uid == UserName && res[i].userName == Password) {
    //               isTrue = true;
    //           }
    //       }
    //   }
    //   var data = {};
    //   data.isLogin = isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
    //   if(isTrue) {
    //       data.userInfo = {};
    //       data.userInfo.uid = UserName;
    //       data.userInfo.userName = Password;
    //   } //登录成功返回用户信息
    //   if(result) {
    //       result = {
    //           code: 200,
    //           msg: 'succeed'
    //       };
    //       data.result = result;
    //   }
    //   if(err) data.err = err;
    //   // 以json形式，把操作结果返回给前台页面
    //   responseJSON(_res, data);

    // // Release the connection
    // // connection.release(); // might not work!!!
    // mysqlPool.releaseConnection(connection);

    // });


  });
});

module.exports = router;
