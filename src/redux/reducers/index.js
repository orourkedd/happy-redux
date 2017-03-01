const { tasks } = require('./tasks')
const { form } = require('./form')
const { combineReducers } = require('redux')

const reducer = combineReducers({
  tasks,
  form
})

module.exports = {
  reducer
}
