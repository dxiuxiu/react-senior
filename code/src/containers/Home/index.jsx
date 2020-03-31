import React from 'react'
import HomeHeader from '../../components/HomeHeader/index.jsx'

import Category from '../../components/Category/index.jsx'

import { connect } from 'react-redux'
import Ad from './subPage/Ad.jsx'
import List from './subPage/List.jsx'
const Home = (props) => {
    return (
        <div >
            <HomeHeader cityName={props.userInfo} />
            <Category/>
            <Ad/>
            <List cityName ={props.userInfo}/>
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

