let AllTodos = localStorage.getItem('blocks') ? JSON.parse(localStorage.getItem('blocks')) : []

const TodosReducer = (state = AllTodos, action) => {
  if(action.type === 'RECIEVE_DATA'){
    return [...state]
  }else if(action.type === 'ADD_BLOCK'){
    return [...state, {
      id: action.id,
      name: action.name,
      isPin: false,
      category:action.category,
      modify: Date.now(),
      todoes:[...action.Todos]
    }]
  }else if(action.type === 'EDIT_BLOCK'){
    return [...state.filter((T) => T.id !== action.id) , {
      id: action.id,
      name: action.name,
      isPin: action.isPin,
      category:action.category,
      modify: Date.now(),
      todoes: [...action.Todos]
    }]
  }else if(action.type === 'DELETE_BLOCK'){
    return [...state.filter((T) => T.id !== action.id)]
  }else if(action.type === 'PIN_BLOCK'){
    state[state.findIndex((B) => B.id === action.id)].isPin = action.bool
    return  [...state]
  }
  return state
}
export default TodosReducer