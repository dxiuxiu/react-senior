import React, { useState } from 'react'
import './index.less'
import { useHistory } from 'react-router-dom'

const Search = (props) => {
    const [searchText, setSearchText] = useState('')
    let history = useHistory()
    const keyword = props.keyword
    return (
        <div id='search-container'>
            <i className="icon-search"></i>
            <input
                type="text"
                placeholder={keyword ? keyword : '请输入关键字'}
                value={searchText}
                onChange={sreachTextChangeHandle}
                onKeyUp={startSearch}
            />
        </div>
    )

    function sreachTextChangeHandle(e) {
        // console.log(e) // warning....
        setSearchText(e.target.value)
    }

    function startSearch(e) {
        const keyCode = e.nativeEvent.keyCode
        if (keyCode !== 13) {
            return
        }
        props.enter(e)

        history.push(`/search/all/${searchText}`)
    }
}

export default Search