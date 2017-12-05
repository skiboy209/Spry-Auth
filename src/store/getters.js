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
// Gallery images
export const images = state => {
  state.images = [require('../assets/summer.jpg'), require('../assets/carrots.jpg'), require('../assets/lightbulb.jpeg')]
  return state.images
}

// Bike Builder Model
export const model = state => {
  state.model = [require('../assets/bikeBuilder/ArmorActive.jpg'), require('../assets/bikeBuilder/ArmorActive2.jpg'), require('../assets/bikeBuilder/ArmorActive3.jpg')]
  return state.model
}

// Bike Builder Colors
export const color = state => {
  state.color = [require('../assets/bikeBuilder/black.png'), require('../assets/bikeBuilder/red.png'), require('../assets/bikeBuilder/white.png'), require('../assets/bikeBuilder/mint.png')]
}

// Bike Builder images
export const frame = state => {
  state.frame = [require('../assets/bikeBuilder/ArmorActiveFull1.jpg'), require('../assets/bikeBuilder/ArmorActiveFull2.jpg'), require('../assets/bikeBuilder/ArmorActiveFull3.jpg')]
  return state.frame
}

export const frameNum = state => {
  return state.frameNum
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
