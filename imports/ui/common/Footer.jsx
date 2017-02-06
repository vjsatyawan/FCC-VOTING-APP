import React, { Component } from 'react';

export default class Footer extends Component {
  render() {

const divStyle = {
    backgroundColor: "#315481",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "7px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "25px",
    width: "100%",
    color: "white"
};


    return (
      <div style={divStyle}>
      Footer
      </div>
    )
  }
}