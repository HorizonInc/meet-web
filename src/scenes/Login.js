import React from "react";
import Button from "../components/Button";

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

const styles = {
	loginContainer: {
		textAlign: "center",
		width: "100%",
		height: "100%",
		backgroundColor: "#f3f3f3",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	contentWrapper: {
    
	},
	logo: {
		width: "30%"
	},
	logoText: {
		fontSize: "36px",
		color: "#75c9ed",
		fontFamily: "Montserrat"
	},
	facebookBtn: {
		flex: 1,
		color: "#3088ad",
		margin: "70px 0",
		width: "80%",
	},
	footer: {
		position: "absolute",
		left: 0,
		bottom: "15px",
		width: "100%",
		color: "#bdc3c7",
	}
};
