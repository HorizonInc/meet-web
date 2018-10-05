import React from "react";

export class Groups extends React.Component {
  render(){
    return (
      <div className="groupsComponent">
        <div className="headerWrapper">
          <h1>CREATE A GROUP</h1>
        </div>
        <form action="">
          <span>Enter ID's of users to invite:</span>
          <input type="text" name="userId" placeholder="e.g. INAN#GOH9EF" />
          <span>Invited users:</span>
          <textarea value="- SAMANI#F9BJS2"></textarea>
        </form>
        <div className="createGroupWrapper">
          <button id="createGroup">Meet up!</button>
        </div>
      </div>
    )
  }
}
