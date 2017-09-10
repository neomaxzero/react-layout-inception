import React, { Component } from 'react';
import PropTypes from 'prop-types';
import setLevel from './utils/setLevel';

export default class Inception extends Component {
  static childContextTypes = {
    level: PropTypes.array,
    diveIn: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      level: []
    };
  }
  poweredChildren = this.props.children;

  getChildContext() {
    return {
      level: this.state.level,
      diveIn: this.diveIn
    };
  }

  diveIn = newLvl => {
    const level = [...this.state.level, newLvl];
    this.setState({ level });
  };

  render() {
    const { children } = this.props;
    // const { level } = this.state;
    // this.poweredChildren = setLevel(this.poweredChildren, level, this.diveIn);
    return <div>{children}</div>;
  }
}
