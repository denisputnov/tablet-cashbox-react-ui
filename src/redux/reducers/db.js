import db from '../../db'

const initialState = db
console.log(initialState);
export default function dbReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}