import React from 'react'
import './App.css';
import Home from './component/Home';
import {  Route, Switch, withRouter } from 'react-router';
import OpenedTodoScreen from './component/OpenedTodoScreen';
import Error404 from './Error404';


function App(props) {

  
  return (
    <div className="">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todo:id' render={() => <OpenedTodoScreen/>} />
          <Route component={Error404}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);
