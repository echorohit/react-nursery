import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/User'


// The Main component renders one of the three provided
// Routes (provided that one matches). the /user
//route will match any pathname that starts
// with /user. The / route will only match
// when the pathname is exactly the string "/". 
//Same goes with /signup and  /login
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)

export default Main
