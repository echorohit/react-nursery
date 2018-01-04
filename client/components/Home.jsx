import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ChangeBg from '../containers/ChangeBg'

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ChangeBg />
  </div>
)

export default Home;