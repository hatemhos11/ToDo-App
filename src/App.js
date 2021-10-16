import React , { useEffect}from 'react'
import './App.css';
import { useDispatch } from 'react-redux';
import {  Route, Switch, withRouter } from 'react-router';
import { RecieveBlocksFN } from './actions/TodosAct'
import { RecieveCatFN } from './actions/catAct';
import OpenedTodoScreen from './component/OpenedTodoScreen';
import Items from './component/Items/Items';
import Sidebar from './component/Sidebar'

function App(props) {

  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(RecieveBlocksFN())
    dispatch(RecieveCatFN())
  },[dispatch])
  return (
    <div className="App allpage">
      <div>

        <div className='container'>
          <button className="add-item-btn" onClick={() => props.history.push(`/todo:id${Math.random().toString(16).slice(2)}`)}>ADD NEW</button>
        </div>
        <Switch>
          <Route path='/todo:id' render={() => <OpenedTodoScreen/>} />
          <Route path='/Todo:id' render={() => <OpenedTodoScreen/>} />
        </Switch>
        <div className='Allblocks'>
          <Items />
        </div>
      </div>
          <Sidebar/>
    </div>
  );
}

export default withRouter(App);
