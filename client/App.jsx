import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LoginContainer from './containers/LoginContainer';
import ProfilePage from './components/ProfilePage';
import Signup from './components/Signup';
import Home from './components/Home';
import Main from './Main';
class App extends React.Component {
  render() {
  return (
		<div>
			<Header/> 
			{ <Switch>
				<Route exact path='/' component={LoginContainer}/>
				<Route exact path='/login' component={ProfilePage}/>
				<Route exact path='/signup' component={Signup}/>
				<Route path='/user' component={ProfilePage}/>
    	</Switch> }
			<Main></Main>
			<Footer/>
    </div>
	);
  }
}

const mapStateToProps = state => {
  return {
		// appLoaded: state.login.isLoggedIn,
		// token: state.login.token
    // appName: state.common.appName,
    // currentUser: state.common.currentUser,
    // redirectTo: state.common.redirectTo
}};



export default connect(mapStateToProps)(App);