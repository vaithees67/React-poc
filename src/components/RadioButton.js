import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    display: 'flex'
  },
  formLabel: {
    textAlign: 'left'
  },
  radioGroup: {
    flexDirection: "row",
  }
}));

const RadioButton = ({ props, handleChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Male');

  const ophandleChange = (event) => {
    setValue(event.target.value);
    handleChange(event);
  };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel className={classes.formLabel} component="legend">{props.props.floatingLabelText}</FormLabel>
      <RadioGroup className={classes.radioGroup} aria-label={props.props.floatingLabelText} name={props.props.floatingLabelText} value={value} onChange={ophandleChange}>
        {props.options.map((option, index) => {
          return (
            <FormControlLabel key={option.primaryText + index}
              value={option.value}
              control={<Radio color="primary" />}
              label={option.primaryText}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton