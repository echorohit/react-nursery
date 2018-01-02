import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import demoApp from './reducers';
import {createLogger} from 'redux-logger'

const logger = createLogger({
});

let store = createStore(demoApp, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>  
      <App />
    </BrowserRouter>  
  </Provider>
, 
document.getElementById('root'));