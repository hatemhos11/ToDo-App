import {addTodoBlock, EditTodoBlock, TodoBlocks, DeleteBlock, PinnedBlock} from '../API/_Data'


// ================ Recieve Data From Fake API
const RecieveBlocksAct = (TodoBlocks) => {
  return {
    type: 'RECIEVE_DATA',
    TodoBlocks
  }
}
export const RecieveBlocksFN = ()=>{
  return async (dispatch) =>{
    let Res = await TodoBlocks
    return dispatch(RecieveBlocksAct(Res))
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
    addTodoBlock(id,name,category, Todos)
    return dispatch(AddBlocksAct(id,name || 'Unknown',category, Todos))
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
    EditTodoBlock(id,isPin,name,category, Todos)
    return dispatch(EditBlockAct(id, isPin, name || 'Unknown', category || '', Todos))
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
    DeleteBlock(id)
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
    PinnedBlock(id,bool)
    return dispatch(PinnedBlockAct(id,bool))
  }
}