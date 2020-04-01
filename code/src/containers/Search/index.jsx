import React from 'react'
import { useParams } from "react-router-dom";
export default function(){
    let { category,keyword } = useParams()
    return (
        <h2>
            search {`category=${category}; keyword =${keyword}`}
        </h2>
    )
}