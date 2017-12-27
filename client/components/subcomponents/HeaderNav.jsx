import React from 'react';
import Input from '../global/Input';
export default class HeaderNav extends React.Component {
    render(){
        return (
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Input type='text' name='text'/>
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
            </li>
            </ul>
        );
    }
}