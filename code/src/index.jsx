import React from 'react'
import ReactDOM from 'react-dom'

import RouterMap from './router/index.jsx'


import  './css/app/app.global.css'
ReactDOM.render(<RouterMap />,
    document.getElementById('root'))

// HMR
if (module.hot) {
    module.hot.accept()
}