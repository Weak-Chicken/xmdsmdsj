/**
 * Define your fake data and their getters here.
 */
export default {
  userLogin(succeeded) {
    if (succeeded) {
      return {
        "success": true,
        "flag": "INFO_USER_LOGIN_SUCCEEDED",
        "userData": {
            "uuid": 1,
            "userName": "Jon",
            "userPwd": "12345",
            "userEmail": "jon@233.com",
            "userBio": "wahaha",
            "userLevel": "User"
        }
      }
    } else {
      return {
        "success": false,
        "flag": "ERROR_USER_NAME_WRONG"
      }
    }
  },
};