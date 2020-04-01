import React from 'react'
import './index.less'
const CityList = (props) => {
    return (
        <div id='city-list'>
            <ul className='city-list-container'>
                <li className='city-item' onClick={() => { clickHandle('上海') }}>上海</li>
                <li className='city-item' onClick={() => { clickHandle('北京') }}>北京</li>
                <li className='city-item' onClick={() => { clickHandle('杭州') }}>杭州</li>
                <li className='city-item' onClick={() => { clickHandle('无锡') }}>无锡</li>

                <li className='city-item' onClick={() => { clickHandle('广州') }}>广州</li>
                <li className='city-item' onClick={() => { clickHandle('西安') }}>西安</li>
                <li className='city-item' onClick={() => { clickHandle('江苏') }}>江苏</li>
                <li className='city-item' onClick={() => { clickHandle('浙江') }}>浙江</li>

                <li className='city-item' onClick={() => { clickHandle('湖南') }}>湖南</li>
                <li className='city-item' onClick={() => { clickHandle('湖北') }}>湖北</li>
                <li className='city-item' onClick={() => { clickHandle('江西') }}>江西</li>
                <li className='city-item' onClick={() => { clickHandle('汉中') }}>汉中</li>


                <li className='city-item' onClick={() => { clickHandle('榆林') }}>榆林</li>
                <li className='city-item' onClick={() => { clickHandle('测试') }}>---</li>
                <li className='city-item' onClick={() => { clickHandle('测试') }}>---</li>
                <li className='city-item' onClick={() => { clickHandle('测试') }}>---</li>

            </ul>
        </div>
    )
    function clickHandle(cityName) {
        props.changeFn(cityName)
    }

}

export default CityList