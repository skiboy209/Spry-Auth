export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')
export const incrementM = ({ commit }) => commit('incrementM')
export const getImage = ({ commit }) => commit('getImage')
export const showNav = ({ commit }) => commit('showNav')

export const nextPart = ({ commit }) => commit('nextPart')

export const partSelect = ({ commit, state }, myString) => {
  // do something with myString
  state.parts[0] = myString
  console.log(state.parts[0])
  commit('partSelect', {myString}) // execute the mutation
  // if the data should be added to the mutation:
  // commit('partSelect', { myString })
}

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

export const authenticate = ({ commit }) => commit('authenticate')
