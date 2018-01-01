import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContent from './components/MainContent'
import Login from './components/Login'
import Signup from './components/Signup'
import ProfilePage from './components/ProfilePage'


// The Main component renders one of the three provided
// Routes (provided that one matches). the /user
//route will match any pathname that starts
// with /user. The / route will only match
// when the pathname is exactly the string "/". 
//Same goes with /signup and  /login
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainContent}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route path='/user' component={ProfilePage}/>
    </Switch>
  </main>
)

export default Main
