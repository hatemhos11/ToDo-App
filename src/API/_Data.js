export let TodoBlocks = [
  {
    id:'idd0d0271358aef',
    name:'Todo List 1',
    modify: 1634471361497,
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
  },
  {
    id:'idd0d0271358atf',
    name:'Todo List 2',
    modify: 1634471380449,
    category: '',
    isPin: true,
    todoes:[
      {
        id: '1634078776774',
        createTime: 1634177200626,
        todoText:'Todo 1',
        done: false
      },
      {
        id: '1634078776374',
        createTime: 1634177200621,
        todoText:'Todo 2',
        done: true
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
export const categories = ['Example 1']
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
