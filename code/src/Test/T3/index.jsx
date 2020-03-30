import React, { useEffect } from 'react'
import { get, post } from '../../api/test'
export default function App() {
    useEffect(() => {
        // get('/test/t1').then((data) => {
        //     console.log(data)
        // }, (err) => {
        //     console.error(err)
        // })
        get('/home').then((data) => {
            console.log(data)
        }, (err) => {
            console.error(err)
        })

        // post('/test/t2', {
        //     data: 'post data'
        // }).then((data) => {
        //     console.log(data)
        // }, (err) => {
        //     console.error(err)
        // })


    })
    // return <div className = 'container'>
    return <div className='container'>
        测试 fetch 做后台请求
    </div>
}

// export default CSSModules(App, style);