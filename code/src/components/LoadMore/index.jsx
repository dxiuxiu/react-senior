import React, { useEffect, useRef } from 'react'
import './index.less'
const LoadMore = (props) => {

    /** 
     * @desc 加载更多
     * 
     */
    const loadMoreFn = () => {
        props.loadingFn()

    }
    let wrapperRef = useRef(null)

    useEffect(() => {
        function callback() {
            // console.log('callback')
            // console.log('wrapper=', wrapperRef)
            if (wrapperRef.current.getBoundingClientRect) {
                const top = wrapperRef.current.getBoundingClientRect().top
                // console.log('wrapper 距离浏览器顶部的距离=',top)
                const windowHeight = window.screen.height
                // console.log('windowHeight=',windowHeight)
                if (top && top < windowHeight) {
                    loadMoreFn()
                }
            }
        }
        let timeId
        window.addEventListener('scroll', function (evt) {
            if (props.isLoadingMore) {
                return
            }
            if (timeId) {
                clearTimeout(timeId)
            }
            timeId = setTimeout(callback, 50)
        }, false)
    }, [])

    return (
        <div className="load-more" ref={wrapperRef}>
            {props.isLoadingMore
                ?
                <span>加载中</span>
                :
                <span onClick={props.loadingFn}>加载更多</span>}
        </div>
    )
}

export default LoadMore


// const LoadMore = (props) => {
//     return (
//         <div className="load-more">
//             {props.isLoadingMore
//                 ?
//                 <span>加载中</span>
//                 :
//                 <span onClick = {props.loadingFn}>加载更多</span>}

//         </div>
//     )
// }