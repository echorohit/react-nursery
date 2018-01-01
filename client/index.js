import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import demoApp from './reducers';

let store = createStore(demoApp);


ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>  
      <App />
    </BrowserRouter>  
  </Provider>
, 
document.getElementById('root'));