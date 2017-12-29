import React from 'react';

export default class HeaderNav extends React.Component {
    render(){
        return (
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sign up</a>
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