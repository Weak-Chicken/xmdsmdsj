import v1 from './API_v1'

/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE modes plus ONE buildlocal mode.
 */
export default {
  data_provider_tester(NODE_ENV) {
    let func_name = 'data_provider_tester';

    if (NODE_ENV === 'production') {
      throw (func_name + ' ERROR: production Mode is not defined!');
    } else if (NODE_ENV === 'development') {
      throw (func_name + ' ERROR: development Mode is not defined!');
    } else if (NODE_ENV === 'buildlocal') {
      throw (func_name + ' ERROR: buildlocal Mode is not defined!');
    } else if (NODE_ENV === 'test') {
      throw (func_name + ' ERROR: test Mode is not defined!');
    } else {
      throw ('ERROR: Mode is not defined!');
    }
  },

  user_login(NODE_ENV, data, succeeded, version='') {
    // Name of our function
    // Here we will let the different versions of API functions to give the name of our function
    let func_name = '';
    // Current using API version
    let latestVersion = v1;

    // Data vaildation here. In this function we don't need validation

    // Choose versions
    if (version === '' || version === 'latest') {
      return latestVersion.user_login(NODE_ENV, data, succeeded, func_name);
    } else if (version === 'v1') {
      return v1.user_login(NODE_ENV, data, succeeded, func_name);
    } else {
      console.log("Warning: You haven't define a legal version number of user login API!");
      return latestVersion.user_login(NODE_ENV, data, succeeded, func_name);
    }
  },
};