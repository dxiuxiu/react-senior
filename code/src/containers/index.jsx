import React from 'react'

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
            </div>
        )
    }
}