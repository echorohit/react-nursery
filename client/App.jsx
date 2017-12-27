import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default class App extends React.Component {
  render() {
  return (
  <div>
    <div className="container-fluid">
      <div className="row">
        <Header/>
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  </div>
) ;
  }
}
