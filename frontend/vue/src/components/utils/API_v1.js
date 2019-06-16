import axios from 'axios';

let versionNumber = 'v1';

let buildLocalAddress = '192.168.240.140';
let productionAddress = 'xmdsmdsj.club';

axios.defaults.withCredentials = true;

function responseStore() {
  let storedResponse;

  function getResponse() {
    return storedResponse;
  }

  function setResponse(response) {
    storedResponse = response;
  }

  return { setResponse, getResponse }
}

const responseManager = responseStore();

/**
 * Define your functions for each API here. Two functions for one API, the 'fake' function
 * and 'production' function.
 */

function userLoginFake(succeeded) {
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

function userLoginProd(address, data) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/v1/User/Login/', {
      userName: data.userName,
      userPwd: data.userPwd,
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    });
  })
}

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE modes plus ONE buildlocal mode.
 */
export default {
  userLogin(ENV_CODE, data, succeeded, func_name) {
    // Name of this API function
    func_name = versionNumber + ': user_login';

    // Choose working mode
    if (ENV_CODE === 'production') {

      throw (func_name + ' ERROR: production Mode is not defined!');

    } else if (ENV_CODE === 'development') {

      // return userLoginFake(succeeded);
      let userres = userLoginProd(buildLocalAddress, data);
      console.log('test', userres);
      return userres;

    } else if (ENV_CODE === 'buildlocal') {

      throw (func_name + ' ERROR: buildlocal Mode is not defined!');

    } else if (ENV_CODE === 'test') {

      throw (func_name + ' ERROR: test Mode is not defined!');

    } else {

      throw ('ERROR: Mode is not defined!');

    }
  },
}