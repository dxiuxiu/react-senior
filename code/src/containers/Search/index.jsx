import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import SearchHeader from '../../components/SearchHeader/index.jsx'

import SearchResultList from './subPage/list.jsx'
export default function () {
    let { category, keyword } = useParams()
    return (
        <div>
            <SearchHeader category = {category} keyword = {keyword}/>
            <SearchResultList category = {category} keyword = {keyword}/>
            <h2>
                search {`category=${category}; keyword =${keyword}`}
            </h2>
        </div>

    )
}
