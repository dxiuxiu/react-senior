import React from 'react'
import Item from './Item/index.jsx'
import './index.less'
const Comment = (props) => {
    const data = props.data
    return (
        <div className="comment-list">
            {data.map((item, index) => {
                return <Item key={index} data={item} />
            })}
        </div>
    )
}

export default Comment