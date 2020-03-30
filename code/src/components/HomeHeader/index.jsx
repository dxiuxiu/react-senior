import React from 'react'
import './index.less'
export default function (props) {
    return (
        <div id='home-header-container'>
            <div className='home-header clear-fix'>
                <div className='float-left home-header-left' >
                    <span>{props.cityName} </span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className='float-right home-header-right'>
                    <i className="icon-user"></i>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className="icon-search"></i>
                        <input type="text" placeholder='请输入关键字' />
                    </div>
                </div>
            </div>
        </div>
    )
}