const { merge } = require('ramda')

const initialState = {
  currentTask: ''
}

function form (state = initialState, action = {}) {
  switch (action.type) {
    case 'updateCurrentTask':
      return merge(state, {
        currentTask: action.payload
      })

    case 'addTask':
      return merge(state, {
        currentTask: ''
      })

    default:
      return state
  }
}

module.exports = {
  form
}
