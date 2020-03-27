import { createStore, applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index.js'

const logger = createLogger()

// const store = createStore(
//     rootReducer,
//     applyMiddleware(logger),
// )



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
        rootReducer, 
        composeEnhancers(applyMiddleware(logger))
    )
export default store