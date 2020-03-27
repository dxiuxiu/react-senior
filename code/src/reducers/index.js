import userInfo from '../reducers/userInfo.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userInfo
})

export default rootReducer