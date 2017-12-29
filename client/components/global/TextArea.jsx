import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
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
			<textarea 
			name={this.props.name}
			rows={this.props.rows}
			cols={this.props.cols}
			className={this.props.clsName}
			datadiv={this.props.datadiv}
			placeholder={this.props.placeHolder}
			>{this.state.value}</textarea>
        ]
        
    );
  }
}

TextArea.defaultProps = {
  clsName: 'textarea',
  isDisabled: false,
  addLabel: true,
  datadiv: '',
  idName: ''
};

TextArea.propTypes = {
  name : PropTypes.string.isRequired,
  clsName: PropTypes.string,
  idName: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,  
  onBlurCB: PropTypes.func,
  isDisabled: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  datadiv: PropTypes.string,
  placeHolder: PropTypes.string,
}