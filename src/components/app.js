const React = require('react');
const logo = require('../static/logo.svg');
const { map } = require('ramda')

require('./app.css');
require('./index.css');

const App = (props) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Task List</h2>
      </div>
      <form onSubmit={(e) => addTask(e, props)}>
        <input
          type='text'
          value={props.form.currentTask}
          onChange={(e) => props.actions.updateCurrentTask(e.target.value)}
        />
        <input type='submit' value='Add Task' />
      </form>
      <ul>
        {map((l) => {
          return <li key={l.timestamp}>{ l.message }</li>
        }, props.tasks)}
      </ul>
    </div>
  );
}

function addTask (e, props) {
  e && e.preventDefault()
  props.actions.addTask(props.form.currentTask)
}

module.exports = {
  App,
  addTask
}
