import React from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import Login from './components/Login.jsx';
export default class App extends React.Component {
  render() {
  return (
	<div>
		<Header/> 
		<div className="container-fluid">
		  <div className="row">
			<Sidebar/>
			<Login/>
		  </div>
		</div>
    </div>
	);
  }
}

