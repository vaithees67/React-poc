import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { emptyFunction, action } from "./utils";

import NewFormClassComponent from "./components/NewFormClassComponent";
import { FETCH_FORM } from "./redux/form/FormActionTypes";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"

export class App extends React.Component {
  componentDidMount() {
    console.log('Mount');
    const { fetchForm } = this.props;
    fetchForm();
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <NewFormClassComponent />
        </ThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  fetchForm: PropTypes.func
};

App.defaultProps = {
  fetchForm: emptyFunction
};

const mapDispatchToProps = dispatch => ({
  fetchForm: () => {
    dispatch(action(FETCH_FORM));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);