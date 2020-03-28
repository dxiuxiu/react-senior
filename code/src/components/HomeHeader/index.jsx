import React from 'react'
import style from './index.css'
export default function () {
    return (
        <div className='clear-fix'>
            <div className={style.floatLeft}>address</div>
            <div className={style.floatRight}>用户中心</div>
            <div><input type="text" /></div>
        </div>
    )
}