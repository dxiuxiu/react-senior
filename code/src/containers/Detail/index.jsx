import React from 'react'
import { useParams } from 'react-router-dom'  
import Header from '../../components/Header/index.jsx'
import Info from './subPage/Info.jsx'
import Comment from './subPage/comment.jsx'
import Buy from './subPage/buy.jsx'
export default function () {
    const  { id } = useParams()
    return (
        <div>
            <Header title ='商户详情'/>
            <Info id = {id}/>
            <Buy id = {id}/>
            <Comment id = {id}/>
        </div>
    )
}