import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ele = []
    return (
        [
          <button 
          type={this.props.inputType}
          name={this.props.name}
          className={this.props.clsName}
        >{this.props.value}</button>
        ]
        
    );
  }
}

Button.defaultProps = {
  inputType: 'text',
  clsName: 'input',
  idName: ''
};

Button.propTypes = {
  inputType: PropTypes.string,
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  idName: PropTypes.string,
  value: PropTypes.string.isRequired
}