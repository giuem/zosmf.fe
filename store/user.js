const SESSION_USER = 'zosmf_user'

let username = ''
try {
  username = JSON.parse(sessionStorage.getItem(SESSION_USER)).account
} catch (error) {
  // ignore error
}

export const state = () => ({
  username
})

export const getters = {
  isLogin(state) {
    return !!state.username
  }
}

export const mutations = {
  SET_USER(state, user) {
    sessionStorage.setItem(SESSION_USER, JSON.stringify(user))
    state.username = user.account
  }
}

export const actions = {
  login({ commit }, user) {
    commit('SET_USER', user)
  },

  logout({ commit }) {
    commit('SET_USER', {})
  }
}
