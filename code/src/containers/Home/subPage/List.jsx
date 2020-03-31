import React, { useState, useEffect } from 'react'

import { get } from '../../../utils/fetch.js'
import { LIST } from '../../../api/home/index.js'
import ListCom from '../../../components/List/index.jsx'
import './index.less'
const List = (props) => {
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {

        get(LIST).then((res) => {
            // console.log(res.data.length)
            const list = res.data
            const hasMore = res.hasMore
            setList(list)
            setHasMore(hasMore)
        }, (err) => {
            console.error(err)
        })
    }, [])

    return (
        <div id='list-container'>
            <h2>猜你喜欢</h2>
            {/* 列表 */}
            {/* loadMore */}
            {/* <ListCom data={list}  /> */}
            {list
                ? <ListCom data={list} />
                : <div>加载中....</div>}
            {/* {list
                ? list.length
                : 'no data'} */}
        </div>
    )
}

export default List