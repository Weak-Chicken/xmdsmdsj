var UserSQL = {  
  insert:'INSERT INTO User(uuid,userName,pwd,userEmail,userBio,userLevel) VALUES(?,?,?,?,?,?)', 
  queryAll:'SELECT * FROM User',  
  getUserById:'SELECT * FROM User WHERE uuid = ? ',
};

module.exports = UserSQL;