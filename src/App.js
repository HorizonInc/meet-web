import React from 'react';
import './App.css';

// import { Login } from './components/Login';
import { Groups } from './components/Groups';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Groups />
      </div>
    );
  }
}

export default App;
