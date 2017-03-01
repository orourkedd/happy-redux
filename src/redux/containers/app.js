const { connect } = require('react-redux')
const { bindActionCreators } = require('redux')
const { App } = require('../../components/app')
const actionCreators = require('../actions')
const { addTask } = require('../functions/add-task')
const { saveTask } = require('../functions/save-task')

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch)
  const addTaskAction = actions.addTask
  actions.addTask = addTask(addTaskAction, saveTask)
  return {
    actions
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

module.exports = {
  App: AppContainer
}
