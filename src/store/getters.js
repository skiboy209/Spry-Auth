export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  console.log('HISTORY ' + state.history.length)
  const begin = (end - limit < 0) ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

export const images = state => {
  state.images = [require('../assets/summer.jpg'), require('../assets/carrots.jpg'), require('../assets/lightbulb.jpeg')]
  return state.images
}

export const imagecounter = state => {
  if (state.imagecount > state.images.length - 1) {
    state.imagecount = 0
    console.log(state.imagecount)
  } else {
    console.log(state.imagecount)
  }
  return state.imagecount
}

export const disabled = state => {
  if (state.imagecount > state.images.length - 1) {
    state.disabled = false
  }
  return state.disabled
}

export const isMobile = state => state.isMobile
