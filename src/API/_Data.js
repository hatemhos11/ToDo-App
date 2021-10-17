export let TodoBlocks = []


// ================= Add Block
export function addTodoBlock(id,name, category, todoes){
  TodoBlocks.push({
    id,
    name,
    isPin: false,
    category,
    modify: Date.now(),
    todoes:[...todoes]
  })

}


// =================== Edit
export function EditTodoBlock(id, isPin,name,category,todoes){
  const blockIndex = TodoBlocks.findIndex((e) => e.id === id)
  if(blockIndex === -1){
    addTodoBlock(name,todoes)
  }else{
    TodoBlocks = [...TodoBlocks.filter((T) => T.id !== id) , {
      id,
      name,
      isPin,
      category,
      modify: Date.now(),
      todoes: [...todoes]
    }]
  }
}

// ================== categories
export const categories = ['Study']
export function addCat(newCat){
  categories.push(newCat)
}
export function DeleteBlock(id){
  TodoBlocks = [...TodoBlocks.filter((T) => T.id !== id)]
}
// PIN BLOCK
export function PinnedBlock(id, bool){
    TodoBlocks[TodoBlocks.findIndex((B) => B.id === id)].isPin = bool
}
