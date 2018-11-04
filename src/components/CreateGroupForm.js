import React, { Component } from "react";
import { styles } from "./styles/CreateGroupFormStyles";
export default class CreateGroupForm extends Component {
	constructor(){
		super();

		this.state = {
			borderStyle: "none"
		};
	}
	textChange(event) {
		var str = event.target.value;
		var isCorrect = /^([A-Z]+#[A-Z0-9]{6})$/.test(str);
		if (str === "") {
			this.setState({
				borderStyle: "none"
			});
		} else if (isCorrect) {
			this.setState({
				borderStyle: "2px solid green"
			});
		} else {
			this.setState({
				borderStyle: "2px solid red"
			});
		}
	}

	render() {
		return (
			<form style={styles.form} action="">
				<span>Enter IDs of users to invite:</span>
				<input type="text" 
					style={{ ...styles.textInput, border: this.state.borderStyle }}
					name="userIds"
					placeholder="e.g. INAN#GOSH9EF"
					onChange={(event) => this.textChange(event)}
				/>

				<span>Invited users:</span>
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