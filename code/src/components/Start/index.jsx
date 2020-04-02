import React, { useEffect, useState } from 'react'
import './index.less'
const Start = (props) => {
    const [startNum, setStartNum] = useState(props.star)
    useEffect(() => {
        if (startNum > 5) {
            startNum = startNum % 5
        }
    }, [])
    return (
        <div className="star-container">
            {[1, 2, 3, 4, 5].map((item, index) => {
                const lightClass = startNum >= item ? ' light' : ''
                return <i key={index} className={'icon-star' + lightClass} onClick={clickHandle(item)}></i>
            })}
        </div>
    )

    function clickHandle(star) {
        const clickCallback = props.clickCallback
        if (!clickCallback) {
            return
        }

        setStartNum(star)

        clickCallback(star)
    }
}

export default Start