const { curry } = require('ramda')

function addTask (dispatchAction, save, message) {
  const task = buildTask(message)
  return save(task)
  .then(handleFailure)
  .then(() => dispatchAction(task))
}

function buildTask (message) {
  return {
    timestamp: Date.now(),
    message
  }
}

function handleFailure (res) {
  // do some error handling
}

module.exports = {
  addTask: curry(addTask)
}
