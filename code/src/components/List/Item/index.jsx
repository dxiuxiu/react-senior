import React from 'react'

import './index.less'



const Item = (props) => {
    const data = props.data
    return (
        <div className="list-item clear-fix">
            <div className="item-img-container float-left">
                <img src={require(`${data.img}`)} alt={data.title} />
                {/* <img src={require(data.img)} alt={data.title} /> */}
            </div>
            <div className="item-content">
                <div className="item-title-container clear-fix">
                    <h3 className="float-left">{data.title}</h3>
                    <span className="float-right">{data.distance}</span>
                </div>
                <p className="item-sub-title">
                    {data.subTitle}
                </p>
                <div className="item-price-container clear-fix">
                    <span className="price float-left">￥{data.price}</span>
                    <span className="mumber float-right">已售{data.mumber}</span>
                </div>
            </div>
        </div>
    )
}

export default Item