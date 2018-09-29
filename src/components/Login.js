import React from 'react';

export class Login extends React.Component {
  render(){
    var today = new Date();
    return (
      <div style={{width: '100%'}}>
        <div className="wrapper">
          <h1>Meet</h1>
          <button id="facebookBtn"><i style={{float:'left', margin: '2px 0 0 20px'}} className="fab fa-facebook-f"></i> Login with Facebook</button>
        </div>
        <footer>Copyright &copy; {today.getFullYear()} Sassy Davtar (aka Jesmani).</footer>
      </div>
    )
  }
}
