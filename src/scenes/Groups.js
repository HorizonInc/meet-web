import React, { Component } from "react";

import { styles } from "./styles/GroupsStyles";

//Components:
import CreateGroupForm from "../components/CreateGroupForm";
import Button from "../components/Button";

export default class Groups extends Component {
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