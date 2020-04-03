import userInfo from '../reducers/userInfo.js'
import store from '../reducers/store.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userInfo,
    store
})

export default rootReducer