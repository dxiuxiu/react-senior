const initCity = '北京'
const initState = initCity
import * as actionTypes from '../constants/userInfo.js'

export default function (state=initState,action){
    switch(action.type){
        case actionTypes.USERINFO_UPDATE:
            console.log(action)
            return action.data
        default:
            return state
    }
}