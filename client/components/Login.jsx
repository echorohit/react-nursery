import React from 'react';
import Input from './global/Input';
import Button from './global/Button';

export default class Login extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				show: true
			}
		}

    render() {

			if(this.props.isLoggedIn) {
			 	return	null;
			 }
			 
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1 style={{textAlign:'center'}}>Login</h1>
						<form className='formcls'>
							<div className="container">
								<Input label='Username' placeHolder="Enter Email/Username" name="username" RequiredField={true} key="inpt1"/>
								<Input label='Password' inputType="password" placeHolder="Enter Password" name="password" RequiredField={true}  key="inpt2"/>
								<div className="clearfix">
									<Button inputType="button" clsName="signupbtn" value="Login" name="login" onClickHandler={this.props.loginSubmitHandler} />
								</div>

							</div>
						</form>
					</main>
        );
    }
}
