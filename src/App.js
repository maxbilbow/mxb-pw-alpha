import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeEditor from "./components/CodeEditor";
import Clock from "./components/Clock";
class App extends Component {
    state = {
        welcome: 1
    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title"><Clock/></h1>
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
