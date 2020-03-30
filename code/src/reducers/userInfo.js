const initState = '陕西'
import * as actionTypes from '../constants/userInfo.js'

export default function (state=initState,action){
    switch(action.type){
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}