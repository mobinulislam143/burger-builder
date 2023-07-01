import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addIngredient = igtype => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}
export const removeIngredient = igtype => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}
export const updatePurchable = () => {
    return{
        type: actionTypes.UPDATE_PURCHASABLE,
     
    }
}
export const loadOrders = (orders) => {
    return{
        type: actionTypes.LOAD_ORDERS,
        payload: orders
    }
}
export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}
export const fetchOrders = () => dispatch =>{
    axios.get('https://burger-builder-fea96-default-rtdb.firebaseio.com/orders.json')
    .then(response => {
        dispatch(loadOrders(response.data))
    } )
    .catch(err => {
        dispatch(orderLoadFailed())
    })
}
