import React, { Component } from 'react';
import setLevel from './utils/setLevel';

export default class Inception extends Component {
  poweredChildren = this.props.children;

  state = {
    level: []
  };

  diveIn = newLvl => {
    const level = [...this.state.level, newLvl];
    this.setState({ level });
  };

  render() {
    const { children } = this.props;
    const { level } = this.state;
    this.poweredChildren = setLevel(this.poweredChildren, level, this.diveIn);
    return <div>{this.poweredChildren}</div>;
  }
}
