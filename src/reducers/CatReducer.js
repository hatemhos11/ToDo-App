const CatReducer = (state = [], action) => {
  if(action.type === 'RECIEVE_CAT'){
    return [...action.categories]
  } else if(action.type === 'ADD_CAT'){
    if(state.includes(action.newCat)) {return state}
    else{ return [...state, action.newCat] }
  }else if(action.type === 'DELETE_CAT'){
    return state.filter((C)=> C !== action.Cat)
  }
  return state
}
export default CatReducer