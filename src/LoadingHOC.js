import React, { Component } from "react";

const LoadingHOC = WrappedState => {
  return class LoadingHOC extends Component {
    render() {
      return this.props.usernames ? (
        <img className="isLoading" alt="spin" />
      ) : (
        <WrappedState {...this.props} />
      );
    }
  };
};

export default LoadingHOC;
