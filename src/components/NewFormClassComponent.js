import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


import { action } from "../utils";
import { FETCH_FORM, FORM_DATA } from "../redux/form/FormActionTypes";



import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import InputTextField from './InputTextField'
import SelectField from './SelectField'
import RadioButton from './RadioButton'
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



//import data from '../form'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(8, 8, 8, 8),
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fefefe',
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    }
  },
});


class NewFormClassComponent extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
  }

  _handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitForm = (event) => {
    const formData = this.state
    console.log(formData);
    const { formSubmit } = this.props;
    formSubmit(formData);
    event.preventDefault();
  }
  render(props) {
    console.log('props', this.props);
    const { classes, fields } = this.props;
    //console.log(fields)
    return (
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sample Form
      </Typography>
          <form className={classes.form} onSubmit={this.submitForm} name="testform">
            {
              fields.map((field, index) => {
                if (field.type === "textfield") {
                  return (
                    <InputTextField key={index} props={field} handleChange={this._handleChange} />)
                }
                else if (field.type === "selectfield") {
                  return (
                    <SelectField key={index} props={field} handleChange={this._handleChange} />
                  )
                }
                else if (field.type === "radioButton") {
                  return (
                    <RadioButton key={index} props={field} handleChange={this._handleChange} />
                  )
                }
                else {
                  return (<div></div>)
                }
              })
            }
            <Button type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} />
          </form>
        </div>
      </Container>
    )
  }
}

NewFormClassComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ form }) => ({
  fields: form.fields,
  formDetails: form.values
});

const mapDispatchToProps = dispatch => ({
  fetchForm: () => {
    dispatch(action(FETCH_FORM));
  },
  formSubmit: (data) => {
    dispatch(action(FORM_DATA, data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewFormClassComponent))
