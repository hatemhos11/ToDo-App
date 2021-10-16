export let TodoBlocks = [
  {
    id:'idd0d0271358aef',
    name:'What I Will Do Today.',
    modify: 1634177600620,
    category: '',
    isPin: false,
    todoes:[
      {
        id: '1634078776774',
        createTime: 1634078776774,
        todoText:'Todo 1',
        done: false
      },
      {
        id: '1634078776374',
        createTime: 1634078776274,
        todoText:'Todo 2',
        done: false
      }
    ]
  }
]


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
export const categories = ['travelling','study']
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
