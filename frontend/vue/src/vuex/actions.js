export default {
  loggingIn({ commit }, userData) {
    commit('LOGGING_IN', userData);
  },

  loggingOut({ commit }) {
    commit('LOGGING_OUT');
  },
}