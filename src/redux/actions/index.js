function addTask (task) {
  return {
    type: 'addTask',
    payload: task
  }
}

function updateCurrentTask (message) {
  return {
    type: 'updateCurrentTask',
    payload: message
  }
}

module.exports = {
  addTask,
  updateCurrentTask
}
