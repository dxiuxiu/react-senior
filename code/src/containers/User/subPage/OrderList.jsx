import React, { useState,useEffect } from 'react'
import { get } from '../../../utils/fetch.js'
import { ORDERLIST } from '../../../api/orderList/index.js'
import './style.less'
const OrderList = function (props) {
    const { userInfo } = props
    const [dataList,setDataList] = useState([])
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
            {dataList.length}
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
}

export default OrderList