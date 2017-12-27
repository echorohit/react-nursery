import React from 'react';
const sidebar={
    position: 'fixed',
    top: '51px',
    bottom: '0',
    left: '0',
    zIndex: '1000',
    padding: '20px 0',
    overflowX: 'hidden',
    overflowY: 'auto', /* Scrollable contents if viewport is shorter than content. */
    borderRight: '1px solid #eee',
}
export default class HeaderNav extends React.Component {
    render(){
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light" style={sidebar}>
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Analytics</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Export</a>
            </li>
        </ul>

        </nav>
        );
    }
}