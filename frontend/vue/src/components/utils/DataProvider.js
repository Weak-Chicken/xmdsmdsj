import v1 from './API_v1'

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE modes plus ONE buildlocal mode.
 */
export default {
  data_provider_tester(ENV_CODE) {
    let func_name = 'data_provider_tester';

    if (ENV_CODE === 'production') {
      throw (func_name + ' ERROR: production Mode is not defined!');
    } else if (ENV_CODE === 'development') {
      throw (func_name + ' ERROR: development Mode is not defined!');
    } else if (ENV_CODE === 'buildlocal') {
      throw (func_name + ' ERROR: buildlocal Mode is not defined!');
    } else if (ENV_CODE === 'test') {
      throw (func_name + ' ERROR: test Mode is not defined!');
    } else {
      throw ('ERROR: Mode is not defined!');
    }
  },

  user_login(ENV_CODE, data, succeeded, version='') {
    // Name of our function
    // Here we will let the different versions of API functions to give the name of our function
    let func_name = '';
    // Current using API version
    let latestVersion = v1;

    // Data vaildation here. Give your validation proper levels. Don't interrupt users unless
    // necessary.
    if (!data.userName || !data.userPwd) {
      throw('Error: No input of userName or userPassword! And the developer seems forgot to deal with it!');
    }

    // Choose versions
    if (version === '' || version === 'latest') {
      return latestVersion.user_login(ENV_CODE, data, succeeded, func_name);
    } else if (version === 'v1') {
      return v1.user_login(ENV_CODE, data, succeeded, func_name);
    } else {
      console.log("Warning: You haven't define a legal version number of user login API!");
      return latestVersion.user_login(ENV_CODE, data, succeeded, func_name);
    }
  },
};