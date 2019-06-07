let version_number = 'v1'

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE mode.
 */
export default {
  user_login(NODE_ENV, data, succeeded, func_name) {
    // Name of this API function
    func_name = version_number + ': user_login';

    // Choose working mode
    if (NODE_ENV === 'production') {
      throw (func_name + ' ERROR: production Mode is not defined!');
    } else if (NODE_ENV === 'development') {
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
    } else if (NODE_ENV === 'test') {
      throw (func_name + ' ERROR: test Mode is not defined!');
    } else {
      throw ('ERROR: Mode is not defined!');
    }
  },
}