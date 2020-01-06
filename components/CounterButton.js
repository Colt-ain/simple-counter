import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class CounterButton extends Component {
	render() {
		const { title, onPress } = this.props;

		return (
			<Button onPress={onPress} title={title}/>
		);
	}
}

CounterButton.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
};

export default CounterButton;
