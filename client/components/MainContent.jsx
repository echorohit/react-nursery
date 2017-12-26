import React from 'react';
import TableHeader from './subcomponents/TableHeader.jsx';
import TableRow from './subcomponents/TableRow.jsx';

export default class App extends React.Component {
  render() {
  return (
        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h1>Dashboard</h1>
          <section className="row text-center placeholders"> 
              <h4>Welcome to my react dashboard</h4>
          </section>
          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped">
            <TableHeader/>
            <TableRow/>
            </table>
          </div>
          
        </main>
  );
  }
}
