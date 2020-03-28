// import React from 'react'


// import  style from './index.css'
// export default function Test(){
//     return <div className = {style.container}> 
//         hello test 
//     </div>
// }

import React from 'react'
import T1 from './T1/index.jsx'
import T2 from './T2/index.jsx'
import './index.less'
import '../css/app/global.less'
export default function Test() {
    return <div  className ='test-class' styleName='container'>
        hello test
        <T1/>
        <T2/>
    </div>
}