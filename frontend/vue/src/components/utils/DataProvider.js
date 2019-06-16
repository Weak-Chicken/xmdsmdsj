import v1 from './API_v1'

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE modes plus ONE buildlocal mode.
 */
export default {
  dataProviderTester(ENV_CODE) {
    let funcName = 'data_provider_tester';

    if (ENV_CODE === 'production') {
      throw (funcName + ' ERROR: production Mode is not defined!');
    } else if (ENV_CODE === 'development') {
      throw (funcName + ' ERROR: development Mode is not defined!');
    } else if (ENV_CODE === 'buildlocal') {
      throw (funcName + ' ERROR: buildlocal Mode is not defined!');
    } else if (ENV_CODE === 'test') {
      throw (funcName + ' ERROR: test Mode is not defined!');
    } else {
      throw ('ERROR: Mode is not defined!');
    }
  },

  userLogin(ENV_CODE, data, succeeded, version='') {
    // Name of our function
    // Here we will let the different versions of API functions to give the name of our function
    let funcName = '';
    // Current using API version
    let latestVersion = v1;

    // Data vaildation here. Give your validation proper levels. Don't interrupt users unless
    // necessary.
    if (!data.userName || !data.userPwd) {
      throw('Error: No input of userName or userPassword! And the developer seems forgot to deal with it!');
    }

    // Choose versions
    if (version === '' || version === 'latest') {
      console.log('outter', latestVersion.userLogin(ENV_CODE, data, succeeded, funcName))
      return latestVersion.userLogin(ENV_CODE, data, succeeded, funcName);
    } else if (version === 'v1') {
      return v1.userLogin(ENV_CODE, data, succeeded, funcName);
    } else {
      console.log("Warning: You haven't define a legal version number of user login API!");
      return latestVersion.userLogin(ENV_CODE, data, succeeded, funcName);
    }
  },
};