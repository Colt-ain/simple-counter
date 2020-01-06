import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import { removeCounter } from '../actions/counts';

class CounterListItem extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.removeCounter = this.removeCounter.bind(this);
	}

	handleClick() {

	}

	removeCounter() {
		const { counter, removeCounter } = this.props;

		removeCounter(counter.id);
	}

	render() {
		const { counter } = this.props;

		return (
			<View>
				<Text>
					{ counter.name }
				</Text>
				<Button onPress={this.removeCounter} title={'Remove Counter'} />
			</View>
		);
	}
}

CounterListItem.propTypes = {
	counter: PropTypes.object,
};

export default connect(null, { removeCounter })(CounterListItem);
