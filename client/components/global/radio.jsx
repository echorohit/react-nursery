import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || 'intial'
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
          this.props.addLabel && 
          <button 
          type={this.props.inputType}
          name={this.props.name}
          value={this.state.value}
          onBlur= {this.props.onBlurCB}
          onChange= {this.handleChange}
        >{this.props.label}</button>
        ]
        
    );
  }
}

Button.defaultProps = {
  inputType: 'button',
  clsName: 'Submitbutton',
  isDisabled: false,
  addLabel: true,
  addFieldSet: true,
  idName: ''
};

Button.propTypes = {
  inputType: PropTypes.string,
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  idName: PropTypes.string,
  onBlurCB: PropTypes.func,
  handleChange: PropTypes.func,
  isDisabled: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool,
  addFieldSet: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string
}