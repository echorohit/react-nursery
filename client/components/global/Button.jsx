import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let value = e.target.value.trim()
    this.setState({value: value})
    console.log(this.state.value);
  }

  render() {
    let ele = []
    return (
        [
          <button 
          type={this.props.inputType}
          name={this.props.name}
          className={this.props.clsName}
        >{this.state.value}</button>
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
  value: PropTypes.string
}