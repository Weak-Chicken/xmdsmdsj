export default {
  LOGGING_IN(state, userData) {
    state.loggedIn = true;
    state.userData = userData;
  },

  LOGGING_OUT(state) {
    state.loggedIn = false;
    state.userData = {};
  },
}