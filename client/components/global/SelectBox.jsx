import React from 'react';
import PropTypes from 'prop-types';

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || 'Select Title'
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
          this.props.addLabel && <label>{this.props.label}</label>,
		  <select
			name={this.props.name}
			value={this.props.selectedOption}
			onChange={this.props.controlFunc}
			>
			<option value="">{this.props.placeholder}</option>
			
			{this.props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
        ]
        
    );
  }
}

Input.defaultProps = {
  clsName: 'selectBox',
  name: 'selectBox',
  isDisabled: false,
  addLabel: true,
  addFieldSet: true,
  idName: ''
  isMultiple: false,
};

Input.propTypes = {  
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool,
  idName: PropTypes.string,
  addFieldSet: PropTypes.bool,
  isMultiple: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,  
  onBlurCB: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string
}