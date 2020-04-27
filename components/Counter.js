import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import { setActiveCounter, increaseCounter, decreaseCounter } from '../actions/counts';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.handleCloseCounter = this.handleCloseCounter.bind(this);
	}

	handleCloseCounter() {
		const { setActiveCounter } = this.props;

		setActiveCounter(null);
	}

	increaseCounter() {
		const { increaseCounter, counter } = this.props;

		increaseCounter(counter);
	}

	decreaseCounter() {
		const { decreaseCounter, counter } = this.props;

		decreaseCounter(counter);
	}

	render() {
		const { counter: { name, count }} = this.props;

		return (
			<View>
				<Button onPress={this.handleCloseCounter} title={'Back'}/>
				<Text>{ name }</Text>
				<Text>{ count }</Text>

				<Button onPress={this.increaseCounter} title={'+'} />
				<Button onPress={this.decreaseCounter} title={'-'} />
			</View>
		);
	}
}

Counter.propTypes = {
	counter: PropTypes.object.isRequired,
};

export default connect(null, { setActiveCounter, decreaseCounter, increaseCounter })(Counter);
