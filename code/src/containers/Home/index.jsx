import React from 'react'
import HomeHeader from '../../components/HomeHeader/index.jsx'

import Category from '../../components/Category/index.jsx'

import { connect } from 'react-redux'

const Home = (props) => {
    return (
        <div >
            <HomeHeader cityName={props.userInfo} />
            <Category/>
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

