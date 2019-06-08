export default {
  checkLogin: function (state) {
    return state.loggedIn;
  },
  getUserName: function (state) {
    return state.userName;
  }
}