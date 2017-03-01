const { concat } = require('ramda')

function tasks (state = [], action = {}) {
  switch (action.type) {
    case 'addTask':
      return concat(state, [action.payload])

    default:
      return state
  }
}

module.exports = {
  tasks
}
