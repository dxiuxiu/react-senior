import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom";
import './index.less'
import Header from '../../components/Header/index.jsx'
import LoginCom from '../../components/Login/index.jsx'
import * as actions from '../../actions/userInfo.js'
const Login = function (props) {
    let history = useHistory()
    const { router,id } = useParams()
    const [checking, setChecking] = useState(true)
    useEffect(() => {
        const { userName } = props
        if (userName) {
            // 已登录 - 跳转至原来跳转到这里的页面
            // history.push(`/${router}`)
            console.log(router)
            history.push(`/user`)
        } else {
            // 未登录 - 加载登录组件
            setChecking(false)
        }
    })
    return (
        <div>
            <Header title='登录' />
            {
                checking
                ? <div> checking </div>
                : <LoginCom loginHandle = {loginHandle}/>
            }
        </div>
    )

    /** @desc 登录之后的处理 */
    function loginHandle (userName){

        const {userInfo} = props
        userInfo.userName = userName
        props.update(userInfo)
        
        if(router){
             history.push(`/${router}/${id}`) // 跳转到来源页面
        } else {
            history.push(`/user`) // 跳转到默认页面
        }
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        update:(data)=>{
            dispatch(actions.update(data))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)