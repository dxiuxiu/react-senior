import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom";
import './index.less'
import Header from '../../components/Header/index.jsx'
const Login = function (props) {
    let history = useHistory()
    const { router } = useParams()
    const [checking, setChecking] = useState(true)
    useEffect(() => {
        const { userID } = props
        if (userID) {
            // 已登录 - 跳转至原来跳转到这里的页面
            // history.push(`/${router}`)
            console.log(router)
            history.push(`/user`)
        } else {
            // 未登录 - 加载登录组件
            setChecking(false)
        }
    }, [props.userID])
    return (
        <div>
            <Header title='登录' />
            {
                checking
                ? <div> checking </div>
                : <div> 显示登录组件</div>
            }
        </div>
    )

    /** @desc 登录之后的处理 */
    function loginHandle (userName){

        if(router){
             history.push(`/${router}`) // 跳转到来源页面
        } else {
            history.push(`/user`) // 跳转到默认页面
        }
    }
}

function mapStateToProps(state) {
    return {
        userID: state.userInfo.userID
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)