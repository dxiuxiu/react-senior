import React, { useState, useEffect } from 'react'
import { get } from '../../../utils/fetch.js'
import InfoCom from '../../../components/Info/index.jsx'
import { DETAIL, COMMENT } from '../../../api/detail/index.js'
const Info = (props) => {
    const [detail, setDetail] = useState(null)
    useEffect(() => {
        detailFn(props.id)
    }, [props.id])
    return (
        detail ? <InfoCom data = {detail}/>
        : null
    )

    function detailFn(id) {
        get(`${DETAIL}?id=${id}`).then((res) => {
            setDetail(res.data)
        }, (err) => {
            console.log(err)
        })
    }
}

export default Info