import React from 'react'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            city:undefined
        }
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


export default App