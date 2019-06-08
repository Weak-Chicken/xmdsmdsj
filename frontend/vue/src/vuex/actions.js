export default {
  addHellows(context) {
    context.commit('ADD_HELLOS');
  },

  addHellowsAlt({commit}) {
    commit('ADD_HELLOS');
  }
}