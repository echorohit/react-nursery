import React from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
const divStyle = {
  color: 'blue',
  textAlign: 'center',
};

export default class App extends React.Component {
  render() {
  return (
	<div>
     <div style={divStyle}>
        <h1>Hello World</h1>
      </div>
    <Header/> 
    <div className="container-fluid">
      <div className="row">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
    </div>
	)
  
  ;
  }
}
