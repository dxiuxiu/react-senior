import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BuyCom from '../../../components/Buy/index.jsx'
import { useHistory } from "react-router-dom"

import *as actions from '../../../actions/store.js'
const Buy = (props) => {
    const [isCollect, setIsCollect] = useState(false)
    let history = useHistory()

    useEffect(() => {
        checkIsCollect()
    }, [])
    return (
        <div id='buy-container'>
            <BuyCom title={!isCollect ? '收藏' : '已收藏'} clickHandle={clickHandleCollect} />
            <BuyCom title='购买' clickHandle={clickHandleBuy} />
        </div>
    )

    /** 
     * @desc 购买按钮的点击处理 
     */
    function clickHandleBuy() {
        const loginFlag = loginCheck()
        if (!loginFlag) {
            console.log('未登录')
            return
        }

        //     /** 购买流程代码 */


        //     /** 购买后跳转到用户中心 */
        history.push('/user')
    }
    /** 
     * @desc 收藏按钮的点击处理 
     */
    function clickHandleCollect() {
        const { id } = props
        const loginFlag = loginCheck()
        if (!loginFlag) {
            return
        } else {
            console.log(' login ')
            if (isCollect) { // 已收藏
                /** 取消收藏 */
                setIsCollect(isCollect => false)
                props.remove({id})
            } else { // 未收藏
                /** 添加收藏 */
                props.add({id})
                setIsCollect(isCollect => true)

            }
        }

    }

    /** @desc 检验当前店铺是否被收藏 */
    function checkIsCollect() {
        const { id, store } = props
        store.some((item) => {
            if (item.id === id) {
                setIsCollect(isCollect => true)
            }
        })
    }

    function loginCheck() {
        const { id, userInfo } = props
        if (!userInfo.userName) {
            history.push(`/login/detail/${id}`)
            // history.push(`/login/detail`)
            return false
        }
        return true
    }
}



function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}
function mapDispatchToProps(dispatch) {
    return {
        update: (data) => {
            dispatch(actions.update(data))
        },
        add: (data) => {
            dispatch(actions.add(data))
        },
        remove: (data) => {
            dispatch(actions.remove(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)

// export default Buy
