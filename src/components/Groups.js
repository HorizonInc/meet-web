import React from "react";

export class Groups extends React.Component {
  render(){
    return (
      <div className="groupsComponent">
        <h1>Create a group</h1>
        <form action="">
          <input type="text" name="userId" placeholder="Enter UserID..." />
          <textarea defaultValue="SAMANIMUKHTAR#F9BJSD093DCM"></textarea>
        </form>
        <div className="createGroupWrapper">
          <button id="createGroup">Meet up!</button>
        </div>
      </div>
    )
  }
}
