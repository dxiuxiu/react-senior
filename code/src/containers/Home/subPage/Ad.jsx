import React, { useState, useEffect } from 'react'

import { get, post } from '../../../utils/fetch.js'

import {AD} from '../../../api/home/index.js'
import HomeAd from '../../../components/HomeAd/index.jsx'
const Ad = () => {

    const [ad, setAd] = useState([])

    useEffect(() => {

        get(AD).then((res) => {
            // console.log(res)
            setAd(res.data)
        }, (err) => {
            console.error(err)
        })

    }, [])

    return <HomeAd data={ad}/>
    
}

export default Ad