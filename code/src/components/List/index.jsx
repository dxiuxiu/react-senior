import React from 'react'
import Item from './Item/index.jsx'
const List = (props) => {
    const list = props.data
    // const list =  [
    //         {
    //             img: './images/汉堡.png',
    //             title: '汉堡大大',
    //             subTitle: '叫我汉堡大大，还你多彩口味',
    //             price: '28',
    //             distance: '120m',
    //             mumber: '389',
    //             id: 1
    //         },
    //         {
    //             img: './images/自助餐.png',
    //             title: '北京开源饭店',
    //             subTitle: '[望京]自助晚餐',
    //             price: '98',
    //             distance: '140m',
    //             mumber: '689',
    //             id: 2
    //         },
    //         {
    //             img: './images/服装定制.png',
    //             title: '服装定制',
    //             subTitle: '原价xx元，现价xx元，可修改一次',
    //             price: '1980',
    //             distance: '160',
    //             mumber: '106',
    //             id: 3
    //         },
    //         {
    //             img: './images/婚纱摄影.png',
    //             title: '婚纱摄影',
    //             subTitle: '免费试穿，拍照留念',
    //             price: '2899',
    //             distance: '160',
    //             mumber: '58',
    //             id: 4
    //         },
    //         {
    //             img: './images/烧烤.png',
    //             title: '麻辣串串烧',
    //             subTitle: '双人免费套餐等你抢购',
    //             price: '0',
    //             distance: '160',
    //             mumber: '1426',
    //             id: 5
    //         }
    //     ]
    
    return (
        <div>
            {
                list.map((item,index) => {
                    // 最好不要使用 index 做 key 值，这里使用 index 是为了 loadMore 加载显示相同的数据不会报错
                    return <Item key = {index} data={item}/>
                    // return <Item key = {item.id} data={item}/>
                })
            }
        </div>
    )
}

export default List