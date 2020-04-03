import React, { useState } from 'react'
import './index.less'
const Buy = (props) => {
    return (
        <div id = 'buy-com' onClick = {props.clickHandle}>
            {props.title}
        </div>
    )
}

export default Buy
