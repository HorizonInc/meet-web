import React, { Component } from "react";
import Button from "../components/Button";

export class Groups extends Component {
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
                <form action="">
                    <span>Enter ID's of users to invite:</span>
                    <input type="text" id="userIds" name="userIds" placeholder="e.g. INAN#GOSH9EF" onChange={(event) => this.textChange(event)}/>
                    <span>Invited users:</span>
                    <ul className="invitedUsersWrapper">
                        <li>
                            <span>SAMANI#G8RVI4</span>
                            <button id="deleteInvite">
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button className="invitesButton">Invites</button>
                </form>
                <div className="createGroupBtnWrapper">
                    <Button style={styles.MeetUpBtn}>Meet up!</Button>
                </div>
            </div>
        </div>)
    }
}

const styles = {
    MeetUpBtn: {
        backgroundColor: '#3498db',
        flex: 1,
        color: '#fff',
        fontSize: '20px',
        maxWidth: '80%',
        borderRadius: '15px'
    }
}
