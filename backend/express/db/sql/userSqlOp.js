var UserSQL = {  
  insert:'INSERT INTO User(uuid,userName) VALUES(?,?)', 
  queryAll:'SELECT * FROM User',  
  getUserById:'SELECT * FROM User WHERE uuid = ? ',
};

module.exports = UserSQL;