import React from 'react';

import logo from "../images/meet_logo.png";

export class Login extends React.Component {
  render(){
    var today = new Date();
    return (
      <div style={{width: '100%'}}>
        <div className="wrapper">
          <img src={logo} style={{width: "30%"}}/>
          <h1>Meet</h1>
          <button id="facebookBtn"><i style={{float:'left', margin: '3px 0 0 20px'}} className="fab fa-facebook-f"></i> Login with Facebook</button>
        </div>
        <footer>Copyright &copy; {today.getFullYear()} Sassy Davtar.</footer>
      </div>
    )
  }
}
