import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <button 
      type={this.props.inputType} 
      name={this.props.name} 
      className={this.props.clsName}
      onClick={this.props.onClickHandler}
    >
      {this.props.value}

    </button>
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
