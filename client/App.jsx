import React from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import SignUp from './components/SignUp.jsx';
export default class App extends React.Component {
  render() {
  return (
	<div>
		<Header/> 
		<div className="container-fluid">
		  <div className="row">
			<Sidebar/>
			<SignUp/>
		  </div>
		</div>
    </div>
	);
  }
}

