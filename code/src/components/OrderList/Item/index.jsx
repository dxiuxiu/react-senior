import React, { useState } from 'react'
import './index.less'
const Item = function (props) {

    const { data } = props
    const [commentState, setCommentState] = useState(data.commentState)
    console.log(data)
    return (
        <div className="order-item-container">
            <div className="clear-fix">
                <div className="order-item-img float-left">
                    <img src={require(`${data.img}`)} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        commentState === 0
                            // 未评价
                            ? <button className="btn" onClick={showComment}>评价</button>
                            :
                            commentState === 1
                                // 评价中
                                ? ''
                                // 已经评价
                                : <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
            </div>
            {
                // “评价中”才会显示输入框
                commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <Star star="0" clickCallback={starClickCallback} />
                        </div>
                        <button className="btn" onClick={submitComment}>提交</button>
                    &nbsp;
                    <button className="btn unseleted-btn" onClick={hideComment}>取消</button>
                    </div>
                    : ''
            }
        </div>
    )

    /** @desc  */
    function showComment() {

        /** 提交评价信息到后台 */
        /*** 操作后切换评价按钮的显示 */
        setCommentState(1)
    }

    /** @desc */
    function starClickCallback() {

    }


    /** @desc  */
    function submitComment() {

    }

    /** @desc */
    function hideComment() {

    }
}

export default Item