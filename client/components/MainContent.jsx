import React from 'react';
import TableHeader from './subcomponents/TableHeader.jsx';
import TableRow from './subcomponents/TableRow.jsx';
import Input from './global/Input.jsx';
import Button from './global/Button.jsx';
export default class MainContent extends React.Component {
    render(){
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1>Login </h1>
            <form action="" method="post">
           { /*<section className="row text-center placeholders">*/}
              <div>
              <Input name="username" label="Username" />
              </div>
              <div>
              <Input name="password" inputType="password" label="Password"/>
              </div>
              <div>
                <Button value="submit" inputType="submit" label="Login" clsName="btn btn-outline-success"/>
                </div>
              { /*</section>*/}
  
              { /*<h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped">
              { /* <TableHeader/>
                <TableRow/>
              </table>
            </div>*/}
            </form>
          </main>
        );
    }
}
