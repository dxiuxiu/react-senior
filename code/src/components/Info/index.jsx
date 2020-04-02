import React from 'react'
import './index.less'

import Star from '../Star/index.jsx'
const Info = (props) => {
    const data = props.data
    return (
        <div id="detail-info-container">
            <div className="info-container clear-fix">
                <div className="info-img-container float-left">
                    <img src={require(`${data.img}`)} />
                </div>
                <div className="info-content">
                    <h1>{data.title}</h1>
                    <div className="star-container">
                        {/* 引用 Star 组件 */}
                        <Star star={data.star} />
                        <span className="price">￥{data.price}</span>
                    </div>
                    <p className="sub-title">{data.subTitle}</p>
                </div>
            </div>
            {/* 设置 innerHTML - 设置的内容会被识别为 html 串*/}
            <p dangerouslySetInnerHTML={{ __html: data.desc }} className="info-desc"></p>

            {/* 设置的内容被识别为简单字符串直接展示 */}
            {/* <p className="info-desc">
                data.desc
            </p> */}
        </div>
    )
}

export default Info