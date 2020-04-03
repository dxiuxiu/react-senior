import React, { useEffect } from 'react'
import Header from '../../components/Header/index.jsx'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import UserInfo from '../../components/UserInfo/index.jsx'
import OrderList from './subPage/OrderList.jsx'
const User = function (props) {
    let history = useHistory()
    useEffect(() => {
        const { userInfo } = props
        if (!userInfo.userName) {
            history.push(`/login`)
        }
    }, [])

    return (
        <div>
            {
                props.userInfo.userName
                    ?
                    <React.Fragment>
                        <Header title='用户中心' backRouter='/' />
                        <UserInfo userInfo={props.userInfo} />
                        <OrderList userInfo={props.userInfo} />
                    </React.Fragment>
                    : null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

