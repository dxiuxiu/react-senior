import React from 'react'

import T1 from './T1/index.jsx'
import T2 from './T2/index.jsx'
import style from './index.less'
// import  './index.less' //  Cannot use styleName attribute for style name 'container' without importing at least one stylesheet.
export default function Test(){
    // return <div styleName = 'container'>
    return <div className = {style.container}> 
        hello test 
        <T1/>
        <T2/>
    </div>
}


// import React from 'react'
// import T1 from './T1/index.jsx'
// import T2 from './T2/index.jsx'
// import styleScss from './index.scss'
// export default function Test(){
//     return <div className = {styleScss.style} > 
//         hello test 
//         <T1/>
//         <T2/>
//     </div>
// }

