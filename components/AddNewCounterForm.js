import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextInput, Text, View } from 'react-native';
import { addNewCounter } from '../actions/counts';

class AddNewCounterForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
		};

		this.createNewCounter = this.createNewCounter.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	createNewCounter() {
		const { addNewCounter } = this.props;
		const { name } = this.state;

		addNewCounter(name);
	}

	handleNameChange(e) {
		this.setState({ name: e.nativeEvent.text });
	}

	render() {
		const { name } = this.state;

		return (
			<View>
				<Text>Name:</Text>
				<TextInput value={name} onChange={this.handleNameChange} />
				<Button onPress={this.createNewCounter} title={'Create'} />
			</View>
		);
	}
}

AddNewCounterForm.propTypes = {};

export default connect(null, { addNewCounter })(AddNewCounterForm);
