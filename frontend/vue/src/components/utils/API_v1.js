import axios from 'axios';

let versionNumber = 'v1';

let buildLocalAddress = '192.168.240.140';
let productionAddress = 'xmdsmdsj.club';

axios.defaults.withCredentials = true;

/**
 * Define your functions for each API here. Two functions for one API, the 'fake' function
 * and 'production' function.
 */

function user_login_fake(succeeded) {
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
}

function user_login_prod(address, data) {
  axios.post('http://localhost:3000/v1/User/Login/', {
    userName: data.userName,
    userPwd: data.userPwd,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE modes plus ONE buildlocal mode.
 */
export default {
  user_login(ENV_CODE, data, succeeded, func_name) {
    // Name of this API function
    func_name = versionNumber + ': user_login';

    // Choose working mode
    if (ENV_CODE === 'production') {

      throw (func_name + ' ERROR: production Mode is not defined!');

    } else if (ENV_CODE === 'development') {

      // return user_login_fake(succeeded);

      user_login_prod(buildLocalAddress, data);

    } else if (ENV_CODE === 'buildlocal') {

      throw (func_name + ' ERROR: buildlocal Mode is not defined!');

    } else if (ENV_CODE === 'test') {

      throw (func_name + ' ERROR: test Mode is not defined!');

    } else {

      throw ('ERROR: Mode is not defined!');

    }
  },
}