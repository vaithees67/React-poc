import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: 'left'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
}));

const SelectField = ({ props, handleChange }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const ophandleChange = event => {
    setAge(event.target.value);
    handleChange(event);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{props.props.floatingLabelText}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={props.props.id}
        name={props.props.id}
        value={age}
        onChange={ophandleChange}>
        {props.options.map((option, index) => {
          return (
            <MenuItem key={option.primaryText + index} value={option.value}>{option.primaryText}</MenuItem>
          )
        })}
        fullWidth
      </Select>
    </FormControl>

  )
}

export default SelectField