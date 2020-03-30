import React from 'react'
import './index.less'
export default function (props) {
    return (
        <div styleName='home-header' className='clear-fix'>
            <div className='float-left' styleName='home-header-left'>
                <span>{props.cityName} </span>
                <i className="icon-angle-down"></i>
            </div>
            <div styleName='home-header-right' className='float-right'>
                <i className="icon-user"></i>
            </div>
            <div styleName='home-header-middle'>
                <div styleName='search-container'>
                    <i className="icon-search"></i>
                    <input type="text" placeholder = '请输入关键字'/>
                </div>
            </div>
        </div>
    )
}