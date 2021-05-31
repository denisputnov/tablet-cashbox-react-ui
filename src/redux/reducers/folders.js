import db from '../../db'

const initialState = Object.keys(db).map(key => {
  return {
    name: key,
    count: db[key].length,
  }
});
console.log(initialState);
export default function folderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}