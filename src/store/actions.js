export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')
export const incrementM = ({ commit }) => commit('incrementM')
export const getImage = ({ commit }) => commit('getImage')
export const showNav = ({ commit }) => commit('showNav')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export const getImageAsync = ({ commit, state }) => {
  state.disabled = true
  var toggler = setInterval(() => {
    commit('getImage')
    if (state.imagecount > 2) {
      state.disabled = false
      clearInterval(toggler)
    }
  }, 1500)
}
