import React from 'react'
import ReactDOM from 'react-dom'

import RouterMap from './router/index.jsx'

import { Provider } from 'react-redux'
import store from './store/createReduxStore.js'

import  './css/app/app.less'
// ReactDOM.render(<RouterMap />,
ReactDOM.render(
    <Provider store = {store}>
        <RouterMap />
    </Provider>,
    document.getElementById('root'))

// HMR
if (module.hot) {
    module.hot.accept()
}