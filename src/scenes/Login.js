import React from 'react';
import Button from "../components/Button";

import logo from "../images/meet_logo.png";

export class Login extends React.Component {
  render(){
    var today = new Date();
    return (
      <div className="loginComponent">
        <div className="wrapper">
          <img src={logo} style={{width: "30%"}} alt=''/>
          <h1>meet</h1>
          <Button style={styles.facebookBtn}><i style={{float:'left', margin: '3px 0 0 20px'}} className="fab fa-facebook-f"></i> Login with Facebook</Button>
        </div>
        <footer>Copyright &copy; {today.getFullYear()} Horizon.</footer>
      </div>
    )
  }
}

const styles = {
  facebookBtn: {
    flex: 1,
    color: '#3088ad',
    margin: '70px 0',
    width: '80%',
  }
}
