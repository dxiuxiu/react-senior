import React,{useState} from 'react'
import './index.less'

const Login = (props) => {
    const [phone,setPhone] = useState('')
    return (
        <div id="login-container">
            <div className="input-container phone-container">
                <i className="icon-tablet"></i>
                <input 
                    type="text" 
                    placeholder="输入手机号" 
                    onChange={changeHandle} 
                    value={phone}
                />
            </div>
            <div className="input-container password-container">
                <i className="icon-key"></i>
                <button>发送验证码</button>
                <input type="text" placeholder="输入验证码"/>
            </div>
            <button className="btn-login" onClick={clickHandle}>登录</button>
        </div>
    )

    function clickHandle (){

        const userName = phone
        props.loginHandle(userName)
    }

    function changeHandle(e){
        const text = e.target.value
        setPhone(text)
    }
}

export default Login