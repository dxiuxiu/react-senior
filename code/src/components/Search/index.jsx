import React, { useState } from 'react'
import './index.less'


const Search = (props) => {
    const [searchText, setSearchText] = useState('')

    return (
        <div id='search-container'>
            <i className="icon-search"></i>
            <input
                type="text"
                placeholder='请输入关键字'
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
        props.search(e)

        // history.push(`/search/all/${searchText}`)
    }
}

export default Search