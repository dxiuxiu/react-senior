import React, { useState, useRef } from 'react'
import './index.less'
import Star from '../../Star/index.jsx'
const Item = function (props) {

    const commentText = useRef(null)
    const { data } = props
    /** 
     * 0 未评价
     * 1- 评价中
     * 
     * 非 0 非 1 已评价
     */
    const [commentState, setCommentState] = useState(data.commentState)
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
                        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={commentText}></textarea>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <Star star='0' clickCallback={starClickCallback} />
                        </div>
                        <button className="btn" onClick={() => {submitComment(data.count)}}>提交</button>
                    &nbsp;
                    <button className="btn unseleted-btn" onClick={hideComment}>取消</button>
                    </div>
                    : ''
            }
        </div>
    )

    /** 
     * @desc  点击评价按钮的事件处理
     * 
    */
    function showComment() {
        /** 评价中 */
        setCommentState(1)
    }

    /**
     *  @desc 点击星星符号的事件处理
     * 
    */
    function starClickCallback(star) {
        
    }


    /** 
     * @desc 点击提交评价信息的事件处理
     * 
    */
    function submitComment(startCount) {
        const value = commentText.current.value.trim() // 评论内容
        console.log(value)
        if (!value) {
            return
        }
        function callback() {
            setCommentState(2)  // 更新显示
        }
        /** 提交评价信息到后台  - 已评价*/
        props.submitComment(data.id, startCount,value, callback)
    }

    /** 
     * @desc 点击取消评价的事件处理
     */
    function hideComment() {
        /** 取消评价 - 未评价*/
        setCommentState(0)

    }
}

export default Item