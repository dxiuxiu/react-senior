import React, { useState, useEffect } from 'react'
import { get, post } from '../../../utils/fetch.js'
import { ORDERLIST, SUBMITCOMMENT } from '../../../api/orderList/index.js'
import './style.less'
import OrderListCom from '../../../components/OrderList/index.jsx'
const OrderList = function (props) {
    const { userInfo } = props
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        if (userInfo) {
            // 获取 orderList
            loadOrderList(userInfo.userName).then((data) => {
                setDataList(data)
            })
        }
    }, [userInfo])
    return (
        <div className='order-list-container'>
            {
                dataList
                    ? <OrderListCom data={dataList} submitComment={submitComment} />
                    : null
            }
        </div>
    )

    function loadOrderList(userName) {
        return get(`${ORDERLIST}?userName= ${userName}`).then((res) => {
            return res.data
        }, (err) => {
            console.error(err)
            return err
        })
    }

    function submitComment(id, count = 0, comment, callback) {
        const data = {
            id,
            comment,
            count
        }
        console.log(data)
        post(`${SUBMITCOMMENT}`, data).then((res) => {

            console.log(res)
            if (res.data) {
                /** 修改成功 */
                callback()
            }
        }, (err) => {
            console.error(err)
        })
    }
}

export default OrderList