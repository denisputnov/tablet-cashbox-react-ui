import { combineReducers } from "redux"
import cartReducer from "./cart"
import dbReducer from "./db"
import foldersReducer from './folders'

export default combineReducers({
  cart: cartReducer, 
  folders: foldersReducer,
  db: dbReducer
})