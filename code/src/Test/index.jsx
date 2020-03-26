import React from 'react'

import T1 from './T1/index.jsx'
import T2 from './T2/index.jsx'
// import style from './index.css'
import './index.css'
export default function Test(){
    // return <div className = {style.container}>
    return <div styleName ='container'>
        hello test 
        <T1/>
        <T2/>
    </div>
}
