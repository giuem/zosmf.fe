const state = {
  username: ""
};

const getters = {
  isLogin(state) {
    return !!state.username;
  }
};

const mutations = {
  setUser(state, user) {
    state.username = user.account;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
