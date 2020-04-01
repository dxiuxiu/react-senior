import React from 'react'
import HomeHeader from '../../components/HomeHeader/index.jsx'

import Category from '../../components/Category/index.jsx'

import { connect } from 'react-redux'
import Ad from './subPage/Ad.jsx'
import List from './subPage/List.jsx'
const Home = (props) => {
    const cityName = props.userInfo.cityName
    return (
        <div >
            <HomeHeader cityName={cityName} />
            <Category/>
            <Ad/>
            <List cityName ={cityName}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)


export default connector(Home)

