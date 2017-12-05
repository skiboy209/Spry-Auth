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

// Change the part when next is clicked
export const nextPart = state => {
  state.modelSelect = false
  state.colorSelect = true
}

export const partSelect = (state, { myString }) => {
  state.myString = myString
  if (myString === 'modelOne') {
    state.frameNum = 0
  } else if (myString === 'modelTwo') {
    state.frameNum = 1
  } else if (myString === 'modelThree') {
    state.frameNum = 2
  }
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
