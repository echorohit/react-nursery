import React from 'react';
import TableHeader from './subcomponents/TableHeader.jsx';
import TableRow from './subcomponents/TableRow.jsx';
import Input from './global/Input';
import Button from './global/Button';
export default class MainContent extends React.Component {
    render(){
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1 style={{textAlign:'center'}}>Sign Up</h1>
			<form className='formcls' action="">
			  <div className="container">
				<Input label='Email' placeHolder="Enter Email" name="email" RequiredField='true' />
				
				<Input label='Password' inputType="password" placeHolder="Enter Password" name="psw" RequiredField='true' />
				<Input label='Repeat Password' inputType="password" placeHolder="Repeat Password" name="psw-repeat" RequiredField='true' />
				
				<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

				<div className="clearfix">
				  <Button inputType="button" clsName="cancelbtn" value="Cancel" />
				  <Button inputType="submit" clsName="signupbtn" value="Sign Up" />
				</div>
			  </div>
			</form>
          </main>
        );
    }
}