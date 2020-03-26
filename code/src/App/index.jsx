import React,{useEffect} from 'react'
import {get, post} from '../api/test'
import './index.css'
export default function App(){
    useEffect(() => {
        get('/test/t1').then((data) => {
            console.log(data)
        },(err) => {
            console.error(err)
        })

        post('/test/t2', {
            data:'post data'
        }).then((data) => {
            console.log(data)
        },(err) => {
            console.error(err)
        })
        
    })
    // return <div className = 'container'>
    return <div styleName = 'container'>
        hello word fesnrfm
    </div>
}

// export default CSSModules(App, style);