import React, { Component } from "react";
import PropTypes from "prop-types";
import { styles } from "./styles/MaterialButtonStyles";

export default class MaterialButton extends Component {
	render(){
		return (
			<button
				style={{...styles.btn, ...this.props.style}}
				className={this.props.className}
				onClick={this.props.onClick}
				id={this.props.id}>
				{this.props.children}
			</button>
		);
	}
}

MaterialButton.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	onClick: PropTypes.func,
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string
	]),
};