let AllCategories = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : []

const CatReducer = (state = AllCategories, action) => {
  if(action.type === 'RECIEVE_CAT'){
    return [...state]
  } else if(action.type === 'ADD_CAT'){
    if(state.includes(action.newCat)) {return state}
    else{ return [...state, action.newCat] }
  }else if(action.type === 'DELETE_CAT'){
    return state.filter((C)=> C !== action.Cat)
  }
  return state
}
export default CatReducer