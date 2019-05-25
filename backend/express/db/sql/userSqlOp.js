var UserSQL = {  
  insert:'INSERT INTO User(uuid,userName,pwd,userEmail,userBio) VALUES(?,?,?,?,?)', 
  insertSimplfied:'INSERT INTO User(uuid,userName,userPwd,userEmail) VALUES(?,?,?,?)', 
  queryAll:'SELECT * FROM User',  
  getUserById:'SELECT * FROM User WHERE uuid = ? ',
};

module.exports = UserSQL;