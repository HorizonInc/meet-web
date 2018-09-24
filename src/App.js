import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    var today = new Date();
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Meet</h1>
          <button id="facebookBtn">Login with Facebook</button>
        </div>
        <footer>Copyright &copy; {today.getFullYear()} Sessy Davtar.</footer>
      </div>
    );
  }
}

export default App;
