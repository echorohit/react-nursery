import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxOrRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeHolder || 'Select',
	  required: this.props.RequiredField || false,
    }
  }
  

  render() {
    let ele = []
    return (
        [
          this.props.addLabel && <label><b>{this.props.label}</b>&nbsp;</label>, this.props.option.map(val => 
            <span><input 
					type={this.props.inputType}
					name={this.props.name}
					className={this.props.clsName}
					// checked={this.state.isChecked.indexOf(val) > -1}
					value={val}
					onChange={this.controlFunc}
					required={this.state.required}
				  /> {val} </span>
          ),<br/>
        ]
    );
  }
}

CheckBoxOrRadio.defaultProps = {
  addLabel: true,
};

CheckBoxOrRadio.propTypes = {
  inputType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  controlFunc: PropTypes.func,
  addLabel: PropTypes.bool,
  label: PropTypes.string,
  option: PropTypes.array.isRequired,
  isChecked: PropTypes.array,
}