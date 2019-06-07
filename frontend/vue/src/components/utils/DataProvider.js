/**
 * Define your APIs here. Please notice that you need to define data obtain methods for
 * THREE mode.
 */
module.exports = {
  data_provider_tester(NODE_ENV) {
    if (NODE_ENV === 'production') {
      return 'production mode';
    } else if (NODE_ENV === 'development') {
      return 'development mode';
    } else if (NODE_ENV === 'test') {
      return 'test mode';
    } else {
      throw ('ERROR: Mode is not defined!');
    }
  }
};