export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

export const incrementM = state => {
  state.count = state.count * 2
  state.history.push('incrementM')
}

export const showNav = state => {
  if (state.isMobile) {
    state.isMobile = false
    console.log('Should collapse' + state.isMobile)
  } else {
    state.isMobile = true
    console.log('Should Open ')
  }
}

export const getImage = state => {
  state.imagecount++
}
