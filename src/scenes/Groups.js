import React, { Component } from "react";

//Components:
import CreateGroupForm from "../components/CreateGroupForm";
import Button from "../components/Button";

export default class Groups extends Component {
	textChange(event) {
		var str = event.target.value;
		var isCorrect = /^([A-Z]+#[A-Z0-9]{6})$/.test(str);
		if (str === "") {
			document.getElementById("userIds").style.border = "none";
		} else if (isCorrect) {
			document.getElementById("userIds").style.border = "2px solid green";
		} else {
			document.getElementById("userIds").style.border = "2px solid red";
		}
	}

	render() {
		return (<div className="groupsComponent">

			<div className="invitesContainer">
				<div className="headerWrapper">
					<h1>Group Invites</h1>
				</div>
				<ul className="invitesWrapper"></ul>
			</div>

			<div className="createGroupContainer">
				<div className="headerWrapper">
					<h1>CREATE A GROUP</h1>
				</div>
                
				<CreateGroupForm />

				<div className="createGroupBtnWrapper">
					<Button style={styles.meetupBtn}>Meet up!</Button>
				</div>
			</div>
		</div>);
	}
}

const styles = {
	meetupBtn: {
		backgroundColor: "#3498db",
		flex: 1,
		color: "#fff",
		fontSize: "20px",
		maxWidth: "80%",
		borderRadius: "15px"
	}
};
