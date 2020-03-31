import React from 'react'
import Item from './Item/index.jsx'
const List = (props) => {
    const list = props.data
    return (
        <div>
            {
                list.map((item) => {
                    return <Item key = {item.id} data={item}/>
                })
            }
        </div>
    )
}

export default List