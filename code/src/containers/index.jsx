import React from 'react'

import Test  from '../App/index.jsx'
export default class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h3> App header</h3>
                {this.props.children}
                <h3> App footer</h3>
                <Test/>
            </div>
        )
    }
}