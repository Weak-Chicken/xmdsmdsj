export default {
  LOGGING_IN(state, userData) {
    state.loggedIn = true;
    state.userName = userData.userName;
  },

  LOGGING_OUT(state, userData) {
    state.loggedIn = false;
    state.userName = '';
  },
}