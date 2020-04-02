import React, { useEffect, useState } from 'react'
import './style.less'
import CommentCom from '../../../components/Comment/index.jsx'
import { get } from '../../../utils/fetch.js'
import { COMMENT } from '../../../api/detail/index.js'
import LoadMore from '../../../components/LoadMore/index.jsx'
const Comment = (props) => {
    const [dataList, setDataList] = useState([])
    const [hasMore, setHasMore] = useState(false)
    let [page, setPage] = useState(1)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    useEffect(() => {

        const { id } = props
        loadDataByIdPage(id, 0).then((res) => {
            setDataList(res.data)
            setHasMore(res.hasMore)
        })
    }, [props.id])
    return (
        <div>
            {
                dataList.length > 0
                    ? <CommentCom data={dataList} />
                    : <div> 暂无数据</div>
            }

            {hasMore ? <LoadMore isLoadingMore={isLoadingMore} loadingFn={loadMore} /> : null}
        </div>
    )

    function loadDataByIdPage(id, page) {
        return get(`${COMMENT}?&id=${id}&page=${page}`).then((res) => {
            return res
        }, (err) => {
            console.error(err)
        })
    }

    function loadMore() {
        setIsLoadingMore(true)
        const { id } = props
        loadDataByIdPage(id, page).then((res) => {
            setDataList(dataList => dataList.concat(res.data))
            setHasMore(res.hasMore)
            setIsLoadingMore(false)
            setPage(page++)
        })
    }
}

export default Comment