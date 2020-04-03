import React from 'react'
import './index.less'
import {useHistory } from 'react-router-dom'
const Header = (props) => {
    const history = useHistory()
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
        const {backRouter} = props
        if(backRouter){
            history.push(backRouter)
            return 
        }
        window.history.back()
    }

}

export default Header