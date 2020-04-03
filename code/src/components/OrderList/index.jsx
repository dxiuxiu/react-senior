import React from 'react'
import './index.less'
import Item from './Item/index.jsx'
const OrderList = function (props) {
    const {data} = props
    return (
        <div>
            {
                data.map((item) => {
                    return <Item key  = {item.id} data = {item} submitComment ={props.submitComment} />
                })
            }
        </div>
    )
}

export default OrderList