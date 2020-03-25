import React from 'react'
import ReactDOM from 'react-dom'

import App from './App/index.jsx'

ReactDOM.render(<App/>,
document.getElementById('root'))

// HMR
if (module.hot) {
    module.hot.accept()
}