import React,{useEffect, useState,useRef,useMemo , Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { AddBlocksFN, EditBlockFN } from '../actions/TodosAct'

import Todo from './todo'
import './styles/OpenedTodoScreen.css'




const OpenedTodoScreen = (props) => {
  const dispatch = useDispatch()

  const todosFromReducer = useSelector(state => state.TodosReducer)
  const [tasksName,setTasksName] = useState('')
  const [inputTask,setinputTask] = useState('')
  const [category,setCategory] = useState('')
  const Categories = useSelector(state => state.CatReducer)
  const [Todos,setTodos] = useState([])
  const inp = useRef()
  Todos.sort((a,b) => a.createTime - b.createTime )
  
  console.log('openedTodo')
  const id = props.match.params.id.slice(1)
  function isFoundInStore(){
    return todosFromReducer.includes(todosFromReducer.find((e) => e.id === id))
  }

// CHECK THE TODO IS OLD ? >>> AND FILL INPUT FIELD
  useEffect(() =>{
    if(isFoundInStore()){
      const currentTodo =  todosFromReducer.find((e) => e.id === id)
      setTasksName(currentTodo.name)
      setTodos([...currentTodo.todoes])
      setCategory(currentTodo.category)
    }
     // eslint-disable-next-line
  },[])

  // EDIT OLD TODO OR ADD NEW TODO LIST
  const saveAndEditBlock =(id,name,category,Todos) =>{
    if(isFoundInStore()){
      dispatch(EditBlockFN(id, todosFromReducer.find(e => e.id === id).isPin ,name, category, Todos))
    }else{
      dispatch(AddBlocksFN(id,name,category, Todos))
    }
    props.history.push('/')
  }

  // ADD NEW TODO
  const handleAddNewTodo = (e) =>{
    e.preventDefault()    
    if(inputTask.trim() !== ''){
      setTodos(Todos.concat({id:Math.random(), createTime: Date.now() ,todoText: inputTask ,done: false}))
      setinputTask('')
    }
    inp.current.focus()
  }
  const changeChecked= (e,todo) => {
    const newTodos = Todos.filter(t => t !== todo)
    setTodos([...newTodos , {...todo,done: e.target.checked}])
  }
  
  // FILTER TODOS [done, not done]
  // eslint-disable-next-line
  const notCompleted = useMemo(() => IsCompleted(false), [Todos])
  // eslint-disable-next-line
const Completed = useMemo(() => IsCompleted(true), [Todos])
  function IsCompleted(isDone) {
    if(Todos.filter((t)=> t.done === isDone ).length === 0){
      return <div className='centerText'>{isDone ? '' : 'No Tasks' }</div>
    }else{
      return Todos.filter((t)=> t.done === isDone ).reverse().map((todo) =>{
        return (
          <Todo 
            key={Math.random()}
            Todos={Todos}
            isDone={isDone}
            changeChecked={changeChecked}
            todo={todo}
            setTodos={setTodos}
          />
        )
      })
    }
  }
  
  function CloseScr(e){
    if(e.target === e.currentTarget){
      if(window.confirm('Do you want to save changes before closing?')) {
        props.history.push('/')
        saveAndEditBlock(id,tasksName.trim(),category, Todos)
      }else {props.history.push('/')}
    }
  }

  // =========================================================================================
  // ================================= RETURN ================================================
  return (
    <div className='overlay' onClick={CloseScr} >
    <div className='OpenedTodoScreen container' >

{/* select categories and input address name */}
      <div className='headTodoScr'>
        <div className='AddForm row'>
          <input className='inp inpAddress' type="text" placeholder='Address' value={tasksName} onChange={(e)=>setTasksName(e.target.value)} autoFocus/>
          <select className='selectFilter' name="cat" value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Select Your Category</option>
            {Categories.map((C) => <option key={Math.random()} value={C} > {C} </option>) }
          </select>
        </div>

{/* FORM ADD NEW TODO */}
        <form className='formAddTodo' onSubmit={handleAddNewTodo}>
          <input 
            type="text" 
            className='inp inpAdd'
            placeholder='What needs to be done?'
            dir="auto"
            value={inputTask} 
            onChange={(e)=>setinputTask(e.target.value)} 
            ref={inp}/>
          <button type="submit" className='addBtn'>ADD</button>
        </form>
      </div>

{/* ALL TODOS */}
      <div className='todos-container'>
        <Fragment>
          {notCompleted}
          <div className='border-sibarate'></div>
          <div className='centerText' style={{color:'#ccc'}}>Completed</div>
          {Completed}
        </Fragment>
      </div>

{/* SAVE BUTTON */}
      <button className='saveBtn' onClick={() => saveAndEditBlock(id,tasksName.trim(),category, Todos)}><span>SAVE</span></button>
    </div>
    </div>
  )
}

export default withRouter(OpenedTodoScreen)
