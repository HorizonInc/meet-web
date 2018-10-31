import React, { Component } from "react";

export default class Button extends Component {
  render(){
    return (
      <button
        style={{...styles.btn, ...this.props.style}}
        className={this.props.className}
        onClick={this.props.onClick}
        id={this.props.id}>
        {this.props.children}
      </button>
    )
  }
}

const styles = {
  btn: {
    appearance: 'none',
    border: 'none',
    fontSize: '18px',
    fontFamily: 'Lato',
    fontWeight: 700,
    backgroundColor: 'white',
    padding: '0 10px',
    color: '#444',
    height: '50px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.1)',
  }
}