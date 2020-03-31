import React from 'react'
import './index.less'
const LoadMore = (props) => {
    return (
        <div className="load-more">
            {props.isLoadingMore
                ?
                <span>加载中</span>
                :
                <span onClick = {props.loadingFn}>加载更多</span>}

        </div>
    )
}

export default LoadMore