import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { fetchData } from '../actions/index';

/** 
{
  user: {
    name: '',
    emai: '',

  },
  cart: {

  },
  other: {

  }
  appState: {
    'isLoggedIn' : true
  }
}

*/


class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleLoginButtonClick(e) {
    //e.preventDefault();
    console.log('here called handleLoginButtonClick')

    let fn = fetchData(
      'https://reqres.in/api/login', 
      'LOGIN', 
      'POST', 
      {
        "email": "peter@klaven",
        "password": "cityslicka"
      } 
    );
    
    this.props.dispatch(fn)

  }

  render() {
    return(<Login loginSubmitHandler={this.handleLoginButtonClick} isLoggedIn={this.props.isLoggedIn}/>)
  }

}

const mapStateToProps = state => {
  return {
		isLoggedIn: state.login.isLoggedIn,
    token: state.login.token
  }
};

export default  connect(mapStateToProps)(LoginContainer);


