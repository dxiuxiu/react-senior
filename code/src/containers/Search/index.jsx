import React, { useState } from 'react'
import {connect} from 'react-redux'
import { useParams } from "react-router-dom"
import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchResultList from './subPage/list.jsx'
const Search = function (props) {
    let { category, keyword } = useParams()
    return (
        <div>
            <SearchHeader category={category} keyword={keyword} />
            <SearchResultList cityName={props.cityName} category={category} keyword={keyword} />
            <h2>
                search {`category=${category}; keyword =${keyword}`}
            </h2>
        </div>

    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        cityName: state.userInfo.cityName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const connector = connect(mapStateToProps,mapDispatchToProps)
export default connector(Search)
