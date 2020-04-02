import React from 'react'
// import LocalStorage from '../utlis/localStorage.js'
// import {CITYNAME} from '../constants/city.js'


// import { Dispatch } from 'redux'

import {update} from '../actions/userInfo.js'
import { connect } from 'react-redux'

class App extends React.Component{

    constructor(props){
        super(props)
        // this.state = {
        //     city:undefined
        // }
    }

    componentDidMount(){
        // let city = LocalStorage.getItem(CITYNAME)
        // if(city ==null){
        //     city = '北京'
        //     this.setState({
        //         city,
        //     })
        // }
        // console.log(city)

        // this.props.userActionUpdate('西安')
    }

    render(){
        return (
            <div>
                {/* <h3> App header</h3> */}
                {this.props.children}
                {/* <h3> App footer</h3> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) =>{
//     return {
//         userInfo : state.userInfo
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         userActionUpdate:(data) => {
//             dispatch(update(data)) // dispatch 与 dispatchEvent
//         }
//     }
// }
// const connector = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )

// export default connector(App)

export default App