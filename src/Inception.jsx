import React, { Component } from 'react';

export default class Inception extends Component {
  state = {
    level: '18902309asd098'
  };
  setupChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, c =>
      React.createElement(
        c.type,
        Object.assign(
          {},
          { ...c.props },
          {
            level: this.state.level
          }
        )
      )
    );
  };

  render() {
    const { children } = this.props;
    const poweredChildren = this.setupChildren();
    return <div>{poweredChildren}</div>;
  }
}
