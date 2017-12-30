import React from 'react';
import Input from './global/Input';
import Button from './global/Button';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';

export default class Login extends React.Component {

	
    render(){
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1 style={{textAlign:'center'}}>Login</h1>
			<form className='formcls' action="">
			  <div className="container">
				<Input label='Username' placeHolder="Enter Email/Username" name="username" RequiredField={true} />
				<Input label='Password' inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} />
				<CheckBoxOrRadio inputType='checkbox' name='gender' addLabel={false} option={['Remember me']} />
				<div className="clearfix">
				  <Button inputType="submit" clsName="signupbtn" value="Login" name="login" />
				</div>
			  </div>
			</form>
          </main>
        );
    }
}
