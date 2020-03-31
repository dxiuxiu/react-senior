import React, { useEffect , useRef} from 'react'
import './index.less'
const LoadMore = (props) => {

    const wrapperRef = useRef()

    useEffect(() => {
        console.log('useEffect')
        function callback() {
            console.log('callback')
            console.log('wrapper=', wrapperRef)
            const top = wrapperRef.current.getBoundingClientRect().top
            console.log('wrapper 距离浏览器顶部的距离=',top)
            const windowHeight = window.screen.height
            console.log('windowHeight=',windowHeight)
            if (top && top < windowHeight) {
                // props.loadingFn()
            }

        }
        let timeId
        window.addEventListener('scroll', function (evt) {
            // console.log(evt)
            if (props.isLoadingMore) {
                return
            }
            // console.log('123')
            if (timeId) {
                clearTimeout(timeId)
            }
            timeId = setTimeout(callback, 50)
        }, false)
    }, [])

    return (
        <div className="load-more" ref = {wrapperRef}>
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