import React from 'react'
import Header from '../../components/Header/index.jsx'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import {connect} from 'react-redux'
const City = function (props) {
    return (
        <div>
            <Header title='选择城市' currentCityName={props.cityName} />
            <CurrentCity currentCity={props.cityName} />
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        cityName:state.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(City)