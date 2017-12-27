import React from 'react';
import Input from '../global/Input';
import { Link } from 'react-router-dom'
export default class HeaderNav extends React.Component {
    render(){
        return (
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Input type='text' name='text'/>
                <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to='/signup' className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
                <Link to='/signup' className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
            </li>
            </ul>
        );
    }
}