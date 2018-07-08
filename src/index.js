import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import CostOrder from './containers/CostOrder'
import './stylesheet/css/ligerui-all.css'
// import './stylesheet/css/ligerui-dialog.css'
// import './stylesheet/css/ligerui-form.css'
// import './stylesheet/css/ligerui-layout.css'
// import './stylesheet/css/ligerui-menu.css'
// import './stylesheet/css/ligerui-tab.css'
// import './stylesheet/css/ligerui-tree.css'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <CostOrder />
  </Provider>,
  document.getElementById('root')
)
