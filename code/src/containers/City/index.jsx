import React from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/index.jsx'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import {connect} from 'react-redux'
import CityList from '../../components/CityList/index.jsx'
import {update} from '../../actions/userInfo.js'
import LocalStorage from '../../utils/localStorage.js'
import {CITYNAME}  from '../../constants/city.js'
const City = function (props) {
    const cityName = props.userInfo.cityName

    let history = useHistory()
    return (
        <div>
            <Header title='选择城市' currentCityName={cityName} />
            <CurrentCity currentCity={cityName} />
            <CityList changeFn = { changeCity }/>
        </div>
    )

    function changeCity (newCity) {
        console.log(newCity)
        /**  
         * 修改 redux
         * 修改 localStorage
         * 跳转页面
         */
        if(newCity==null){
            return
        }
        const userInfo = props.userInfo
        userInfo.cityName = newCity
        props.update(userInfo)


        LocalStorage.setItem(CITYNAME,newCity)

        history.push('/')
    }

}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        userInfo:state.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update:(newCity) =>{
            dispatch(update(newCity))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(City)