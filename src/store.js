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
const store = createStore(reducers, middleware)

export default store
