import React, { useEffect } from 'react'
import './index.less'
const UserInfo = function (props) {
    const { userInfo } = props
    return (
        <div className='userInfo-container'>
            <p>
                <i className='icon-user'></i>
                &nbsp;
                {userInfo.userName}
            </p>
            <p>
                <i className='icon-map-marker'></i>
                &nbsp;
                {userInfo.cityName}
            </p>
        </div>
    )
}

export default UserInfo