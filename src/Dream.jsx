import React, { Component } from 'react';

export default class Dream extends Component {
  state = {
    showing: false
  };

  myStyle = {
    border: '1px solid',
    width: '20px',
    height: '20px'
  };

  diveIn = () => {
    this.setState(prevState => ({
      showing: !prevState.showing
    }));
  };

  render() {
    const { showing } = this.state;
    const { children } = this.props;

    return (
      <div>
        {showing ? (
          children
        ) : (
          <div
            className="entrance"
            style={this.myStyle}
            onClick={this.diveIn}
          />
        )}
      </div>
    );
  }
}
