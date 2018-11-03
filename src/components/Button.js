import React, { Component } from "react";
import PropTypes from "prop-types";
import { styles } from "./styles/ButtonStyles";

export default class Button extends Component {
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

Button.propTypes = {
	style: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	id: PropTypes.string,
	children: PropTypes.node
};