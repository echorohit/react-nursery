import React from 'react';
import Input from './global/Input';
import Button from './global/Button';
import CheckBoxRadio from './global/CheckBoxOrRadio';
import TextArea from './global/TextArea';
import SelectBox from './global/SelectBox';

export default class ProfilePage extends React.Component {
    render(){
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1 style={{textAlign:'center'}}>User Profile</h1>
			<form className='formcls' action="">
			  <div className="container">
			  
				<Input label='First Name' placeHolder="First Name" name="fname" RequiredField={true} />
				
				<Input label='Last Name' placeHolder="Last Name" name="lname" RequiredField={true} />
				
				<Input label='Primary Email' placeHolder="Primary Enter Email" name="pemail" RequiredField={true} />
				
				<Input label='Secondary Email' placeHolder="Secondary Enter Email" name="semail" />
				
				<CheckBoxRadio inputType='radio' name='gender' label='Gender' option={['Male','Female']} RequiredField={true} />
				
				<Input label='Phone No' placeHolder="Enter Phone No" name="phoneno" />
				
				<Input label='Mobile' placeHolder="Enter Mobile" name="mobile" RequiredField={true} />
				
				<TextArea label='Address' placeHolder="User Address" name="address" RequiredField={true} />
				
				<Input label='Zip Code' placeHolder="Zip Code" name="zip" RequiredField={true} />
				
				<SelectBox label='Country' name='country' option={["India","USA","Canada"]} value="Select Country" /><br/><br/>
				
				
				
				<div className="clearfix">
				  <Button inputType="button" clsName="cancelbtn" value="Cancel" name="cancel" />
				  <Button inputType="submit" clsName="signupbtn" value="Update" name="updateProfile" />
				</div>
				
			  </div>
			</form>
          </main>
        );
    }
}