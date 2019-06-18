export default {
  checkLogin: function (state) {
    return state.loggedIn;
  },
  getUserData: function (state) {
    return state.userData;
  },
}