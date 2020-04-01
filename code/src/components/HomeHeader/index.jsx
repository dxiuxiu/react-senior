import React, { useState } from 'react'
import './index.less'
import { Link, useHistory } from 'react-router-dom'
import Search from '../../components/Search/index.jsx'
export default function (props) {
    let history = useHistory()
    return (
        <div id='home-header-container'>
            <div className='home-header clear-fix'>
                <div className='float-left home-header-left' >
                    <Link to='/city'>
                        <span>{props.cityName} </span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className='float-right home-header-right'>
                    <Link to='/user'>
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className='home-header-middle'>
                    {/* <div className='search-container'>
                        <i className="icon-search"></i>
                        <input
                            type="text"
                            placeholder='请输入关键字'
                            value={searchText}
                            onChange={sreachTextChangeHandle}
                            onKeyUp={startSearch}
                        />
                    </div> */}
                    <Search enter = {startSearch}/>
                </div>
            </div>
        </div>
    )


    function startSearch(e) {
        console.log('startSearch')

        history.push(`/search/all/${searchText}`)
    }
}