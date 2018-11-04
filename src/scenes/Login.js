import React from "react";
import MaterialButton from "../components/MaterialButton";

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
					<MaterialButton style={styles.facebookBtn}><i style={{float:"left", margin: "3px 0 0 20px"}} className="fab fa-facebook-f"></i> Login with Facebook</MaterialButton>
				</div>
				<footer style={styles.footer}>Copyright &copy; { today.getFullYear()} Horizon.</footer>
			</div>
		);
	}
}