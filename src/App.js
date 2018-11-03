import React from "react";
import "./App.css";

// import Login from './scenes/Login';
import Groups from "./scenes/Groups";

class App extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				{/* <Login /> */}
				<Groups />
			</div>);
	}
}

export default App;

const styles = {
	container: {
		height: "100%"
	}
};