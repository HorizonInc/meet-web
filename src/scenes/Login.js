import React from "react";
import Button from "../components/Button";

import { styles } from "./styles/LoginStyles";
import logo from "../images/meet_logo.png";

export default class Login extends React.Component {
	render(){
		var today = new Date();
		return (
			<div style={styles.loginContainer}>
				<div style={styles.contentWrapper}>
					<img src={logo} style={styles.logo} alt=''/>
					<h1 style={styles.logoText}>meet</h1>
					<Button style={styles.facebookBtn}><i style={{float:"left", margin: "3px 0 0 20px"}} className="fab fa-facebook-f"></i> Login with Facebook</Button>
				</div>
				<footer style={styles.footer}>Copyright &copy; { today.getFullYear()} Horizon.</footer>
			</div>
		);
	}
}