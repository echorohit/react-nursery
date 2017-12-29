import React from 'react';
import PropTypes from 'prop-types';

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);    
  }
  
  render() {    
    return (
        [
          this.props.addLabel && <label><b>{this.props.label}</b></label>,
           <select  
          name={this.props.name}
          onChange= {this.handleChange} >
            <option value={this.props.value}>{this.props.value}</option>
            {this.props.option.map(opt=>
              <option value={opt}>{opt}</option>
            )}
          </select>
        ]
    );
  }
}

SelectBox.defaultProps = {
  clsName: 'input',
  addLabel: true,
  idName: ''
};

SelectBox.propTypes = {
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  idName: PropTypes.string,
  label: PropTypes.string,
  option: PropTypes.array.isRequired,
}