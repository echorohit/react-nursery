import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
      placeholder: this.props.placeHolder || '',
      required: this.props.RequiredField || false,
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
          this.props.addLabel && <label><b>{this.props.label}</b></label>,
          <input 
          type={this.props.inputType}
          name={this.props.name}
          value={this.state.value}
          required={this.state.required}
          placeholder={this.state.placeholder}
          onBlur= {this.props.onBlurCB}
          onChange= {this.handleChange}
        />
        ]
    );
  }
}

Input.defaultProps = {
  inputType: 'text',
  clsName: 'input',
  isDisabled: false,
  addLabel: true,
  addFieldSet: true,
  idName: ''
};

Input.propTypes = {
  inputType: PropTypes.string,
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  idName: PropTypes.string,
  onBlurCB: PropTypes.func,
  isDisabled: PropTypes.bool.isRequired,
  RequiredField: PropTypes.bool,
  addLabel: PropTypes.bool,
  addFieldSet: PropTypes.bool,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string
}