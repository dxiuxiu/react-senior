import React, { useState, useEffect } from 'react'

import { get } from '../../../utils/fetch.js'
import { LIST } from '../../../api/home/index.js'
import ListCom from '../../../components/List/index.jsx'
import './index.less'
const List = (props) => {
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(false) // 有没有更多数据可供加载
    const [isLoadingMore, setIsLoadingMore] = useState(false) // 控制显示加载更多按钮状态 - 显示'加载中...'还是'加载更多'
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

    /**
     * @desc 加载更多
     */
    const loadMore =() =>{

    }
    return (
        <div id='list-container'>
            <h2>猜你喜欢</h2>
            {/* 列表 */}
            {/* loadMore */}
            <ListCom data={list}  />
            {/* {list.length>0
                ? <ListCom data={list} />
                : <div>加载中....</div>} */}
            {/* {list
                ? list.length
                : 'no data'} */}
        </div>
    )
}

export default List