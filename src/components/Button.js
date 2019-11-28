import React, { Component } from 'react'
import Button from "@material-ui/core/Button";

export default class ButtonMUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      variant: this.props.variant,
      color: this.props.color

    };
  }

  render() {
    return (
      <Button
        variant={this.state.variant}
        color={this.state.color}
        type={this.state.type}
      >Submit
      </ Button>
    )
  }
}
