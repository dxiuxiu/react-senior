import React from 'react'
import './index.less'

const Header = (props) => {
    return (
        <div id = 'common-header'>
            <span className='back-icon' onClick={handleClick}>
                <i className="icon-chevron-left"></i>
            </span>

            <h1>
                {props.title}
            </h1>
        </div>
    )

    function handleClick(){
        window.history.back()
    }

}

export default Header