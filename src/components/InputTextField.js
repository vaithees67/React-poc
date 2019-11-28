import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputTextField = ({ props, handleChange }) => {
  const { properties = props.props } = props
  const { id, floatingLabelText, fullWidth } = properties
  return (
    <TextField
      id={id}
      name={id}
      label={floatingLabelText}
      fullWidth={fullWidth}
      autoFocus
      variant="outlined"
      margin="normal"
      onChange={handleChange}
    />
  )
}

export default InputTextField