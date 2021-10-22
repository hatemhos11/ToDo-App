
const RecieveCatAct = () => {
  return {
    type:'RECIEVE_CAT',
  }
}

export const RecieveCatFN = ()=>{
  return (dispatch) =>{
    return dispatch(RecieveCatAct())
  }
}

const AddCatAct = (newCat) => {
  return {
    type: 'ADD_CAT',
    newCat
  }
}
export const AddCatFN = (newCat)=>{
  return  (dispatch) =>{
    return dispatch(AddCatAct(newCat))
  }
}

// ==================Delete
const DeleteCatAct = (Cat) => {
  return {
    type: 'DELETE_CAT',
    Cat
  }
}
export const DeleteCatFN = (Cat)=>{
  return  (dispatch) =>{
    return dispatch(DeleteCatAct(Cat))
  }
}
