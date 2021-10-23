import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AllReducers from './reducers/AllReducers'

const store = createStore(AllReducers , applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
  </BrowserRouter>,
document.getElementById('root')
);
