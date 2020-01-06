import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CounterListItem from './CounterListItem';
import { View, Text, StyleSheet, Platform } from 'react-native';
import CounterButton from './CounterButton';
import { setNewCounterAdding } from '../actions/counts';

class CounterList extends Component {
	constructor(props) {
		super(props);

		this.addNewCounter = this.addNewCounter.bind(this);
	}

	addNewCounter() {
		const { setNewCounterAdding } = this.props;

		setNewCounterAdding(true);
	}

	render() {
		const { counterList } = this.props;

		return(
			<View styles={styles.container}>
				{ counterList.map((counter, i) => (<CounterListItem counter={counter} key={i}/>)) }
				<CounterButton title={'+ Add Counter'} onPress={this.addNewCounter}/>
			</View>
		)
	}
}

CounterList.propTypes = {
	counters: PropTypes.array,
};

const mapStateToProps = ({ counters: { counterList } }) => {
	return { counterList };
};

export default connect(mapStateToProps, { setNewCounterAdding })(CounterList);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
