const React = require('react')
const ReactDOM = require('react-dom')
const { App } = require('./redux/containers/app')
const { Provider } = require('react-redux')
const { buildStore } = require('./redux/store')

require('./components/index.css')

const store = buildStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
