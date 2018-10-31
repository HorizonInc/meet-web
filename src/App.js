import React, { Component } from 'react';
import './App.css';

import { Login } from './scenes/Login';
import { Groups } from './scenes/Groups';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Login />
                {/* <Groups /> */}
            </div>);
    }
}

export default App;
