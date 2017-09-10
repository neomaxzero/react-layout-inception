import React, { Component } from 'react';
import setLevel from './utils/setLevel';

export default class Dream extends Component {
  state = {};
  myStyle = {
    border: '1px solid',
    width: '20px',
    height: '20px'
  };
  poweredChildren = this.props.children;

  // const setupChildren = (children, level, diveInFn) => {
  //   return React.Children.map(children, (c, ix) => {
  //     // if (c.props && c.props.children)
  //     //   setupChildren(c.props.children, level, diveInFn);

  //     // console.log('diveInFn', diveInFn);
  //     if (c.type && c.type.name === 'Dream') {
  //       console.log('CHILLLLLDD', c.props.id);
  //       const id = c.props.id || uuid();
  //       return React.createElement(
  //         c.type,
  //         Object.assign(
  //           {},
  //           { ...c.props, level, id, key: id, diveInFn: () => diveInFn(id) }
  //         )
  //       );
  //     } else return c;
  //   });
  // };

  render() {
    const { children, level, id, parentId, diveInFn } = this.props;
    // if my parent is the chosen one i need to show the entrance
    if (level[level.length - 1] === parentId) {
      return (
        <div
          className="entrance"
          style={this.myStyle}
          onClick={this.props.diveIn}
        />
      );
    }
    // else i need to check if i need to show my childrens
    if (level.includes(id)) {
      this.poweredChildren = setLevel(
        this.poweredChildren,
        level,
        diveInFn,
        id
      );
      return <div>{this.poweredChildren}</div>;
    }
    return null;
  }
}
