import * as actionTypes from '../constants/store.js'
const initState = []
export default function (state = initState,action){

    switch(action.type){
        case actionTypes.STORE_REMOVE:
            return state.filter((item) => {
                if(item.id !== action.data.id){
                    return item
                }
            })
        case actionTypes.STORE_UPDATE:
            // return state.map((item) => {
            //     if(item.id !== action.data.id){
            //         return item
            //     }
            //     return item.xx = action.data
            // })
            return action.item
        case actionTypes.STORE_ADD:
            console.log(action)
            return [action.data,...state]
            // state.unshift(action.data)
            // return state
        default :
            return state
    }
}