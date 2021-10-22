

// ================ Recieve Data From Fake API
const RecieveBlocksAct = () => {
  return {
    type: 'RECIEVE_DATA',
  }
}
export const RecieveBlocksFN = ()=>{
  return async (dispatch) =>{
    return dispatch(RecieveBlocksAct())
  }
}



// ================= Add 
const AddBlocksAct = (id, name, category, Todos) => {
  return {
    type: 'ADD_BLOCK',
    id,
    name,
    category,
    Todos
  }
}
export const AddBlocksFN = (id,name,category, Todos)=>{
  return  (dispatch) =>{
    return dispatch(AddBlocksAct(id,name,category, Todos))
  }
}



// ================= Edit
const EditBlockAct = (id,isPin,name,category, Todos) => {
  return {
    type: 'EDIT_BLOCK',
    id,
    isPin,
    name,
    category,
    Todos
  }
}
export const EditBlockFN = (id,isPin,name,category, Todos)=>{
  return  (dispatch) =>{    
    return dispatch(EditBlockAct(id, isPin,name, category, Todos))
  }
}

// =============== Delete
const DeleteBlockAct = (id) => {
  return {
    type: 'DELETE_BLOCK',
    id,
  }
}
export const DeleteBlockFN = (id)=>{
  return  (dispatch) =>{    
    return dispatch(DeleteBlockAct(id))
  }
}

// ================== Pin
const PinnedBlockAct = (id, bool) => {
  return {
    type: 'PIN_BLOCK',
    id,
    bool
  }
}
export const PinnedBlockFN = (id,bool) =>{
  return  (dispatch) =>{    
    return dispatch(PinnedBlockAct(id,bool))
  }
}