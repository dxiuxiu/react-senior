import React from 'react'

import './index.less'
const imgPathPrefix = './images/'
const HomeAd = (props) => {
    return (
        <div id = 'home-ad'>
            <h2>超值特惠</h2>
            <div className = 'ad-container'>
                {
                    props.data.map((item) => {
                        return (
                            <div className = 'ad-item' key={item.title}>
                                <a href={item.link}>
                                    <img src={require(`${imgPathPrefix}${item.title}.png`)} alt={item.title} />
                                    {/* <img src={require(item.img)} alt={item.title} /> */}
                                    {/* <img src={require('./images/暑假5折.png')} alt={item.title} /> */}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeAd