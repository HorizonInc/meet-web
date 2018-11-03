import React, { Component } from "react";
import { styles } from "./styles/CreateGroupFormStyles";
export default class CreateGroupForm extends Component {
	render() {
		return (
			<form style={styles.form} action="">
				<span>Enter IDs of users to invite:</span>
				<input type="text" style={styles.textInput} name="userIds" placeholder="e.g. INAN#GOSH9EF" onChange={(event) => this.textChange(event)}/>
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