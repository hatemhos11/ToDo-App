import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import AllReducers from './reducers/AllReducers'

const store = createStore(AllReducers , applyMiddleware(thunk))

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);


