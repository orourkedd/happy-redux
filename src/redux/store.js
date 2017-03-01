const { createStore } = require('redux')
const { reducer } = require('./reducers')

const buildStore = (initialState) => createStore(reducer, initialState)

module.exports = {
  buildStore
}
