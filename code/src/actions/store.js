import * as actionTypes from '../constants/store.js'

export function update(data){
    return {
        type:actionTypes.STORE_UPDATE,
        data
    }
}
export function add(item){
    console.log(item)
    return {
        type:actionTypes.STORE_ADD,
        data:item
    }
}
export function remove(item){
    return {
        type:actionTypes.STORE_REMOVE,
        data:item
    }
}