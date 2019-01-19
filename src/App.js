import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel, faPlus } from "@fortawesome/free-solid-svg-icons";

import Login from "./scenes/Login";
import Groups from "./scenes/Groups";

import "./App.css";

library.add(faStroopwafel, faPlus);

class App extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				{/* <Login /> */}
				<Groups />
			</div>
		);
	}
}

export default App;

const styles = {
	container: {
		height: "100%"
	}
};