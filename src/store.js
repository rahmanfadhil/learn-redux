import { applyMiddleware, createStore } from 'redux'

// import middlewares
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'

// import reducers
import reducers from './reducers'

// apply middlewares
const middleware = applyMiddleware(promise(), thunk, logger)

// create store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // connect to redux devtool
  middleware
)

export default store
