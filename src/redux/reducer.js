import * as actionTypes from './actionTypes'
const INGREDIENT_PRICE = {
    salad: 20,
    cheese: 40,
    meat: 60,
}
const INITIAL_STATE = {
    ingredient: [
        {type: 'salad', amount: 0},
        {type: 'cheese', amount: 0},
        {type: 'meat', amount: 0},
    ],
    totalPrice: 80,
    purchaseable: false,
    orders: [],
    orderErr: false,
    orderLoading: true,
}
export const reducer = (state= INITIAL_STATE, action) => {
    const ingredients = [...state.ingredient]
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredients){
                if(item.type === action.payload) item.amount++;
            }
            return{
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload]
            }
        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredients){
                if(item.type === action.payload) {
                    if(item.amount<=0) return state;
                    item.amount--
                }
            }
            return{
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload]
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredient.reduce((sum, element)=> {
                return sum+element.amount
            }, 0)
            return{
                ...state,
                purchaseable: sum > 0,
            }
        case actionTypes.LOAD_ORDERS:
            let orders = []
            for (let key in action.payload){
                orders.push({
                    ...action.payload[key],
                    id: key,
                })
            }

            return{
                ...state,
                orders: orders,
                orderLoading: false
            }
        case actionTypes.ORDER_LOAD_FAILED:
            return{
                ...state,
                orderErr: true,
                orderLoading: false

            }
        default:
            return state;
    }
}
