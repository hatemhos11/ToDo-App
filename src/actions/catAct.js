import {addCat , categories} from '../API/_Data'

const RecieveCatAct = (categories) => {
  return {
    type:'RECIEVE_CAT',
    categories
  }
}

export const RecieveCatFN = ()=>{
  return async (dispatch) =>{
    let res = await categories
    return dispatch(RecieveCatAct(res))
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
    addCat(newCat)
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
