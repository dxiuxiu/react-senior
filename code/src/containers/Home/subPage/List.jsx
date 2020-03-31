import React, { useState, useEffect } from 'react'

import { get } from '../../../utils/fetch.js'
import { LIST } from '../../../api/home/index.js'
import ListCom from '../../../components/List/index.jsx'
import './index.less'
import LoadMore from '../../../components/LoadMore/index.jsx'
const List = (props) => {
    const [list, setList] = useState([]) // 存储列表数据
    const [hasMore, setHasMore] = useState(false) // 当前还有没有更多数据可供加载
    const [isLoadingMore, setIsLoadingMore] = useState(false) // 控制显示加载更多按钮状态 - 显示'加载中...'还是'加载更多'
    let [page, setPage] = useState(1) // 记录下一页页码,默认显示第 0 页
    
    useEffect(() => {
        console.log('useEffect')

        loadFirstPageData().then((res) => {
            console.log(res)
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
     * @desc 请求首屏数据
     */
    const loadFirstPageData = () => {
        return get(LIST).then((res) => {
            // console.log(res.data.length)
            return res
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * @desc 加载更多
     */
    const loadMore = () => {
        console.log('====loadMore=====')

        // 记住 isLoadingMore 状态
        setIsLoadingMore(true)
        // const cityName = props.cityName

        return get(LIST).then((res) => {
            console.log(res)
            console.log('list',list)
            // const currentList = [...list, ...res.data]
            const currentList = list.concat(res.data)
            console.log('currentList',currentList.length)
            setList(currentList)
            // setPage(page)
            setHasMore(res.hasMore)
            setIsLoadingMore(false)
        }, (err) => {
            console.error(err)
        })


    }
    return (
        <div id='list-container'>
            <h2>猜你喜欢</h2>
            {/* 列表 */}
            <ListCom data={list} />
            {/* loadMore */}
            {hasMore
                ? <LoadMore isLoadingMore={isLoadingMore} loadingFn={loadMore} />
                : null}

        </div>
    )
}

export default List