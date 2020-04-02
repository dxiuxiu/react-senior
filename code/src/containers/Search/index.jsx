import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import SearchHeader from '../../components/SearchHeader/index.jsx'

import SearchResultList from './subPage/list.jsx'
export default function () {
    let { category, keyword } = useParams()
    console.log('search/index=>',category,keyword)  
    
    // const [categoryState,setCategoryState] = useState(category)
    // const [keywordState,setKeywordState] = useState(keyword)
    return (
        <div>
            {/* <SearchHeader category = {categoryState} keyword = {keywordState}/>
            <SearchResultList category = {categoryState} keyword = {keywordState}/> */}
            <SearchHeader category = {category} keyword = {keyword}/>
            <SearchResultList category = {category} keyword = {keyword}/>
            {/* <h2>
                search {`category=${category}; keyword =${keyword}`}
            </h2> */}
        </div>

    )
}
