/* eslint-disable quotes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles/HeaderStyles';

export default class Header extends Component {

	renderLeftIcon() {
		const leftIcon = this.props.leftIcon;

		const icons = {
			menu: 'bars',
			invites: 'layer-group'
		};
		const className = "fas fa-" + icons[leftIcon];

		return (
			<div style={styles.iconWrapper}>
				<span style={styles.icon} className={className}></span>

			</div>
		);
	}

	renderRightIcon() {
		const rightIcon = this.props.rightIcon;

		const icons = {
			createGroup: 'users',
		};
		const className = "fas fa-" + icons[rightIcon];

		return (
			<div style={styles.iconWrapper}>
				<span style={styles.icon} className={className}></span>
			</div>
		);
	}

	render(){
		const {
			title,
			leftIcon,
			leftIconAction,
			rightIcon,
			rightIconAction,
			containerStyles,
		} = this.props;

		const headerTitles = title ? title : 'Sortiaowt';
		return (
			<div style={{...styles.container, ...containerStyles}}>
				{ leftIcon && this.renderLeftIcon()}

				<h4 style={styles.title}>{title}</h4>

				{ rightIcon && this.renderRightIcon()}
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
};