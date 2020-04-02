import React from 'react'
import './index.less'
import Search from '../Search/index.jsx'
const SearchHeader = (props) => {
    return (
        <div id='search-header'>
            <span className='back-icon' onClick={handleClick}>
                <i className="icon-chevron-left"></i>
            </span>
            <Search keyword={props.keyword}  category = {props.category} enter={startSearch} />
        </div>
    )
    function handleClick() {
        window.history.back()
    }
    function startSearch(e) {
        console.log('startSearch')

    }
}

export default SearchHeader