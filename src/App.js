import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render (){
    let style = {
      width: "250px", 
      height: "250px",
      color: this.props.color,
      backgroundColor: this.props.background,
      display: "inline-block",
      margin: "10px",
      verticalAlign: "top"
    };
    return (
      <h1 style = {style}> {this.props.color} on {this.props.background}</h1>
    );
  }
}

class App extends Component {
  render () {
    return (
      <>
      <Square color ="white" background="blue" />
      <Square color ="blue" background="red" />
      <Square color ="green" background="pink" />
      </>
    );
  }
}

export default App;