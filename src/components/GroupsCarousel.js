import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class GroupsCarousel extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

GroupsCarousel.propTypes = {
	children: PropTypes.node
};