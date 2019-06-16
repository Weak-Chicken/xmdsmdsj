/**
 * Define your error codes methods here. There are inputs used to define errors,
 * only one return is allowed, which is the error message.
 */
export default {
  getLoginErrorMessage(flag) {
    switch(flag) {
      case 'ERROR_USER_NOT_FOUND':
        return 'User is not registered!';
      case 'ERROR_USER_NAME_OR_PASSWORD_WRONG':
      case 'ERROR_USER_UUId_WRONG':
      case 'ERROR_USER_NAME_WRONG':
      case 'ERROR_USER_PASSWORD_WRONG':
        return 'User name or password is wrong!';
      case 'ERROR_UNKNOWN_USER_LOGIN_ERROR':
        return 'Unknown internal error. Please ask our web engineers for more infomation.';
    }
  },
}