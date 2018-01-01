import React from 'react';

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import Login from './components/Login.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import SignUp from './components/SignUp.jsx';
import Main from './Main';
export default class App extends React.Component {
  render() {
  return (
	<div>
		{/* <Header/> 
		<div className="container-fluid">
		  <div className="row">
			<Sidebar/>
			<Login/>
			<SignUp/>
			<ProfilePage/>
			<MainContent/>
		  </div>
		</div> */}
		<Header/> 
		<Main />

    </div>
	);
  }
}

