import React from 'react'
import './index.less'
const CurrentCity = (props) => {
    return (
        <div className ='currentCity'>
            {props.currentCity}
        </div>
    )
}

export default CurrentCity