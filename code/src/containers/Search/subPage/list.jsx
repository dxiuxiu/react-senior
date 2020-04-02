import React, { useState, useEffect } from 'react'
import { get } from '../../../utils/fetch.js'
import { SEARCH } from '../../../api/search/searchList.js'
import ListCom from '../../../components/List/index.jsx'
import './index.less'
import LoadMore from '../../../components/LoadMore/index.jsx'
const List = (props) => {

    const [list, setList] = useState([]) // 存储列表数据
    const [hasMore, setHasMore] = useState(false) // 当前还有没有更多数据可供加载
    const [isLoadingMore, setIsLoadingMore] = useState(false) // 控制显示加载更多按钮状态 - 显示'加载中...'还是'加载更多'
    let [page, setPage] = useState(1) // 记录下一页页码,默认显示第 0 页





    useEffect(() => {
        const { cityName, category, keyword } = props
        console.log('keyword=', keyword, ';category=', category)
        if (keyword) {
            searchListByCategoryKeyword(cityName, category, keyword, 0).then((res) => {
                const list = res.data
                const hasMore = res.hasMore
                setList(list)
                setHasMore(hasMore)
            }, (err) => {
                console.error(err)
            })
        }

        // console.log('useEffect de [props]')

    }, [props.keyword, props.category])

    /**
 * @desc 请求首屏数据
 */
    const searchListByCategoryKeyword = (cityName, category, keyword, nextPage) => {
        return get(`${SEARCH}?cityName=${cityName}&category=${category}&keyword=${keyword}&page=${nextPage}`).then((res) => {
            return res
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * @desc 加载更多
     */
    const loadMore = () => {
        // 记住 isLoadingMore 状态
        setIsLoadingMore(true)
        // const cityName = props.cityName

        const { cityName, category, keyword } = props
        console.log('keyword=', keyword, ';category=', category)
        if (keyword) {
            searchListByCategoryKeyword(cityName, category, keyword, page).then((res) => {
                const data = res.data
                const hasMore = res.hasMore
                setList(list => [...list, ...data])
                setHasMore(hasMore)
                setIsLoadingMore(false)
            }, (err) => {
                console.error(err)
            })
        }
        setPage(page => page + 1)
    }
    return (
        <div id='search-list-container'>
            {/* search list */}
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