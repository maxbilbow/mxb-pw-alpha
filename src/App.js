import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeEditor from "./components/CodeEditor";

class App extends Component {
    state = {
        welcome: 1
    };

    componentDidMount() {
        const self = this;
        // self.timerID = setInterval(
        //     () => self.setState({welcome: ++self.state.welcome}),
        //     1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.welcome}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CodeEditor/>
      </div>
    );
  }
}

export default App;
