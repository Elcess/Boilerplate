import React from 'react';
import { connect } from 'react-redux';
import { doNothing } from '../app/reducer';

const Hello = props => {
  return <h1>Hello, World!</h1>;
};

const mapDispatchToProps = dispatch => {
  return {
    doNothing: () => dispatch(doNothing),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Hello);
