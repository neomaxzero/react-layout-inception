import React, { Component } from 'react';
import setLevel from './utils/setLevel';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
export default class Dream extends Component {
  state = {
    id: uuid()
  };
  myStyle = {
    border: '1px solid',
    width: '20px',
    height: '20px'
  };

  static contextTypes = {
    level: PropTypes.array,
    diveIn: PropTypes.func
  };

  componentWillMount() {
    console.log('SE DESMONTA');
  }

  diveIn = () => {
    const { diveIn } = this.context;
    diveIn(this.state.id);
  };

  render() {
    const { level } = this.context;
    const { id } = this.state;
    console.log(this.context);
    const { children, parentId } = this.props;
    // if my parent is the chosen one i need to show the entrance
    // if (level[level.length - 1] === level[level.length-2]) {
    if (level[level.length - 1] === parentId) {
      return (
        <div className="entrance" style={this.myStyle} onClick={this.diveIn} />
      );
    }
    // else i need to check if i need to show my childrens
    if (level.includes(id)) {
      this.poweredChildren = setLevel(children, level, id);
      return <div>{this.poweredChildren}</div>;
    }
    return null;
  }
}
