import React from 'react';
import TableHeader from './subcomponents/TableHeader.jsx';
import TableRow from './subcomponents/TableRow.jsx';
import Inputarea from './global/Input.jsx';
import SButton from './global/Button.jsx';
import Textarea from './global/TextArea.jsx';
export default class MainContent extends React.Component {
    render(){
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1>Dashboard</h1>
			
			<div className="userProfile">	
				<h5>User Profile Form</h5>
				<Inputarea name='userName' label='User Name' value='Enter Name' /><br/>
				<Textarea name='address' label='Address' dataDiv='rrrr'></Textarea>
				<br/>
				<Inputarea inputType='radio' name='Gender' label='Male' value='Male' />
				<Inputarea inputType='radio' name='Gender' label='Female' value='Female' /><br/>
				<Inputarea inputType='email' name='email' label='Email'/><br/>
				<SButton inputType='submit' name='submit' value='Submit' label='Submit'/>			
			</div>			
  
          </main>
        );
    }
}