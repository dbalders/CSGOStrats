/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { HomeScreen } from './HomeScreen';
// import { ProfileScreen } from './ProfileScreen';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'CSGO Strats',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			// <Button
			//   title="Go to Jane's profile"
			//   onPress={() => navigate('Map', {name: 'Jane'})}
			// />
			<React.Fragment>
				<Button
					title="Mirage"
					onPress={() => navigate('Map', { name: 'Mirage' })}
				/>
				<Button
					title="Inferno"
					onPress={() => navigate('Map', { name: 'Inferno' })}
				/>
				<Button
					title="Dust2"
					onPress={() => navigate('Map', { name: 'Dust2' })}
				/>
				<Button
					title="Nuke"
					onPress={() => navigate('Map', { name: 'Nuke' })}
				/>
				<Button
					title="Train"
					onPress={() => navigate('Map', { name: 'Train' })}
				/>
				<Button
					title="Overpass"
					onPress={() => navigate('Map', { name: 'Overpass' })}
				/>
				<Button
					title="Vertigo"
					onPress={() => navigate('Map', { name: 'Vertigo' })}
				/>
			</React.Fragment>
		);
	}
}

class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'Map',
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props
		// console.log(navigate)
		const mapName = this.props.navigation.getParam('name')
		return (
			<React.Fragment>
				<Button
					title={mapName}
				/>
				<Button
					title="Pistol"
					onPress={() => navigate('Strats', { strat: 'Pistol' })}
				/>
				<Button
					title="Full Buy"
					onPress={() => navigate('Strats', { strat: 'Full Buy' })}
				/>
				<Button
					title="Force Buy"
					onPress={() => navigate('Strats', { strat: 'Force Buy' })}
				/>
				<Button
					title="Save"
					onPress={() => navigate('Strats', { strat: 'Save' })}
				/>
			</React.Fragment>
		);
	}
}

class StratsScreen extends React.Component {
	static navigationOptions = {
		title: 'Strats',
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props
		const stratName = this.props.navigation.getParam('strat')
		return (
			<React.Fragment>
				<Button
					title={stratName}
				/>
			</React.Fragment>
		);
	}
}

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	Map: { screen: MapScreen },
	Strats: { screen: StratsScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
