import React,{useEffect, useState,useRef,useMemo , Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { AddBlocksFN, EditBlockFN } from '../actions/TodosAct'
import Form from './Form'
import Todo from './todo'
import './styles/OpenedTodoScreen.css'



const OpenedTodoScreen = (props) => {
  // Redux Store Data
  const dispatch = useDispatch()
  const todosFromReducer = useSelector(state => state.TodosReducer)
  const Categories = useSelector(state => state.CatReducer)
  
  // State
  const [tasksName,setTasksName] = useState('')
  const [category,setCategory] = useState('')
  const [inputTask,setinputTask] = useState('')
  const [Todos,setTodos] = useState([])
  Todos.sort((a,b) => a.createTime - b.createTime )
  const inp = useRef()
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
  }, [])

  // EDIT OLD TODO OR ADD NEW TODO LIST
  const saveAndEditBlock =(id,name,category,Todos) =>{
    name = name === "" ? 'Unknown' : name
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

  // =========================================================================================
  // ================================= RETURN ================================================
  return (
    <div className='overlay' onClick={() => saveAndEditBlock(id,tasksName,category, Todos)} >
      <div className='OpenedTodoScreen container' >

{/* select categories and input address name */}
        <Form 
          tasksName={tasksName} setTasksName={setTasksName} category={category}
          setCategory={setCategory} Categories={Categories} handleAddNewTodo={handleAddNewTodo}
          inputTask={inputTask} setinputTask={setinputTask} inp={inp}
        />

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
        <button className='saveBtn' onClick={() => saveAndEditBlock(id,tasksName,category, Todos)}><span>SAVE</span></button>
      </div>
    </div>
  )
}

export default withRouter(OpenedTodoScreen)
