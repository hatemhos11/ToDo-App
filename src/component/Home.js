import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { RecieveBlocksFN } from '../actions/TodosAct'
import { RecieveCatFN } from '../actions/catAct';
import Items from './Items/Items';
import Sidebar from './Sidebar'


const Home = (props) => {
    
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(RecieveBlocksFN())
    dispatch(RecieveCatFN())
  },[dispatch])
  const blocks = useSelector(state => state.TodosReducer)
  const Categories = useSelector(state => state.CatReducer)
  
  // Save Data In Local Storage 
  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks])
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(Categories));
  }, [Categories])

  return (
    <div className="App allpage">
      <div>
        <div className='container'>
          <button className="add-item-btn" onClick={() => props.history.push(`/todo:id${Math.random().toString(16).slice(2)}`)}>ADD NEW</button>
        </div>
        <div className='Allblocks'>
          <Items />
        </div>
      </div>
        <Sidebar/>
    </div>
  )
}

export default Home
