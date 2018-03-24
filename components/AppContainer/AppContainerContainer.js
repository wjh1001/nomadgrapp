import React, { Component } from "react";
import PropTypes from "prop-types";
import AppContainerPresenter from "./AppContainerPresenter";

class AppContainerContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <AppContainerPresenter {...this.state} />;
  }
}

export default AppContainerContainer;
