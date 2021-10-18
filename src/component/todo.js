import React,{useState} from 'react'
import FeatherIcon from 'feather-icons-react'


const Todo = (props) => {
  const [EditMode, setEditMode] = useState(false)
  const {isDone, todo, changeChecked ,setTodos, Todos } = props
  const [ChangetodoText, setChangetodoText] = useState(todo.todoText)

  const changeText = (todo)=>{
    const newTodos = Todos.filter(t => t !== todo)
    setTodos([...newTodos , {...todo,todoText:ChangetodoText }])
  }
  console.log('todo')

  function isArabic(text) {
    const Chars = /[\u0600-\u06FF\u0750-\u077F]/;
    let result = Chars.test(text.charAt(0));
    return {textAlign: result ? 'right':'left', direction: result ? 'rtl' : 'ltr'}
}
  return (
    <div>
      <div className={ isDone ? 'doneTodo Todo' : 'Todo'}> 
        {!EditMode ? 
          <label style={isArabic(ChangetodoText)}>
            <input type="checkbox" onChange={(e)=> changeChecked(e,todo)} checked={isDone}/>
            <FeatherIcon icon={isDone ? 'check-square' : 'square'} className={isDone ? 'checkIcon done' : 'checkIcon'} />
            <span className='todoText'>{ChangetodoText}</span>
          </label> 
            : 
          (<input className='todoText todoTextEdit' type="text" value={ChangetodoText} onChange={(e) => setChangetodoText(e.target.value)} onBlur={() => changeText(todo)} autoFocus/>) 
        }
        <div className='TodoIcon'>
          <i classname='edit'><FeatherIcon className="editIcon" icon='edit' onClick={() => setEditMode(!EditMode)} /></i>
          <i classname='trash'><FeatherIcon className='trashIcon' icon='trash-2' onClick={()=> setTodos( Todos.filter( T => T !== todo) ) } /></i>
        </div>
      </div>
    </div>
  )
}

export default Todo
