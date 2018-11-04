import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from "./styles/CreateGroupFormStyles";

export default class CreateGroupForm extends Component {
	constructor(){
		super();

		this.state = {
			borderStyle: "none",
			iconColour: "grey",
			iconBorderWidth: "1px"
		};
	}

	textChange(event) {
		var str = event.target.value;
		var isCorrect = /^([A-Z]+#[A-Z0-9]{6})$/.test(str);
		if (str === "") {
			this.setState({
				borderStyle: "none",
				iconColour: "grey",
				iconBorderWidth: "1px"
			});
		} else if (isCorrect) {
			this.setState({
				borderStyle: "2px solid #7aCC7a",
				iconColour: "#7aCC7a",
			});
		} else {
			this.setState({
				borderStyle: "2px solid #ff7a7a",
				iconColour: "#ff7a7a",
				iconBorderWidth: 0
			});
		}
	}

	render() {
		var stateStyles = { ...this.state };
		return (
			<form style={styles.form} action="">
				<span>Enter IDs of users to invite:</span>
				<div style={styles.inputWrapper}>
					<input type="text" 
						style={{ ...styles.textInput, border: stateStyles.borderStyle }}
						name="userIds"
						placeholder="e.g. INAN#GOSH9EF"
						onChange={(event) => this.textChange(event)}
					/>
					<button 
						style={{ ...styles.addButton, color: stateStyles.iconColour, borderLeftWidth: stateStyles.iconBorderWidth}}>
						<FontAwesomeIcon style={{flex: 1}} icon="plus" />
					</button>
				</div>
				

				<span>Invited users</span>
				<ul className="invitedUsersWrapper">
					<li>
						<span>SAMANI#G8RVI4</span>
						<button id="deleteInvite">
							<i className="fas fa-times"></i>
						</button>
					</li>
				</ul>
				{/* <button className="invitesButton">Invites</button> */}
			</form>
		);
	}
}