import React from 'react'
import { useParams } from "react-router-dom";
import SearchHeader from '../../components/SearchHeader/index.jsx'
export default function () {
    let { category, keyword } = useParams()
    return (
        <div>
            <SearchHeader keyword = {keyword}/>
            <h2>
                search {`category=${category}; keyword =${keyword}`}

            </h2>
        </div>

    )
}
