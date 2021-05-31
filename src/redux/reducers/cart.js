import { DECREMENT_CART_ITEM, DELETE_ITEM_FROM_CART, INCREMENT_CART_ITEM, ADD_ITEM_TO_CART } from '../actions/actionTypes'

const initialState = []

export default function cartReducer(state = initialState, action) {

  switch (action.type) {
    case DELETE_ITEM_FROM_CART: 
      return state.filter(item => item.name !== action.payload)
    case INCREMENT_CART_ITEM: 
      return [...state].map(item => {
        if (item.name === action.payload) item.count += 1
        return item
      })
    case DECREMENT_CART_ITEM: 
      return [...state].map(item => {
        if (item.name === action.payload) item.count -= 1
        if (item.count === 0) return null
        return item
      }).filter(item => item !== null)
    case ADD_ITEM_TO_CART:
      const cartNames = state.map(item => item.name)
      if (cartNames.includes(action.name)) return [...state].map(item => {
        if (item.name === action.name) item.count += 1
        return item
      })
      return [...state, {
        name: action.name,
        count: 1, 
        price: action.price
      }]
    default:
      return state
  }

}