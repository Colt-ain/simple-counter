import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Button, StyleSheet } from 'react-native';
import { removeCounter, decreaseCounter, increaseCounter, setActiveCounter } from '../actions/counts';

class CounterListItem extends Component {
	constructor(props) {
		super(props);

		this.removeCounter = this.removeCounter.bind(this);
		this.increaseCounter = this.increaseCounter.bind(this);
		this.decreaseCounter = this.decreaseCounter.bind(this);
		this.openCounter = this.openCounter.bind(this);
	}

	removeCounter() {
		const { counter, removeCounter } = this.props;

		removeCounter(counter.id);
	}

	increaseCounter() {
		const { counter, increaseCounter } = this.props;

		increaseCounter(counter)
	}

	decreaseCounter() {
		const { counter, decreaseCounter } = this.props;

		decreaseCounter(counter)
	}

	openCounter() {
		const { setActiveCounter, counter } = this.props;

		setActiveCounter(counter.id);
	}

	render() {
		const { counter } = this.props;

		return (
			<View style={styles.container} >
				<View style={styles.counterItem} onPress={this.openCounter} accessibilityRole={'button'}>
					<Text style={styles.counterName}>
						{ counter.name }
					</Text>
					<View>
						<Text style={styles.counterValue}>
							{ counter.count }
						</Text>
						<Button onPress={this.removeCounter} title={'X'} />
					</View>
				</View>

				<Button onPress={this.increaseCounter} title={'+'} />
				<Button onPress={this.decreaseCounter} title={'-'} />
			</View>
		);
	}
}

CounterListItem.propTypes = {
	counter: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		flexWrap: 'nowrap',
		width: '100%',
		marginTop: 25,
	},
	counterItem: {
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		flexWrap: 'nowrap',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		width: '100%',
	},
	counterName: {
		fontSize: 24,
	},
	counterValue: {
		fontSize: 24,
	},
});

export default connect(null, { removeCounter, decreaseCounter, increaseCounter, setActiveCounter })(CounterListItem);
