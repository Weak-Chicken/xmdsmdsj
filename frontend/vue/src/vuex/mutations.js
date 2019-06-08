export default {
  LOGGING_IN(state) {
    state.loggedIn = true;
  },

  LOGGING_OUT(state) {
    state.loggedIn = false;
  },
}