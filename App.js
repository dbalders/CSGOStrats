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
import styles from './styles'
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
					onPress={() => navigate('OffDef', { name: 'Mirage' })}
				/>
				<Button
					title="Inferno"
					onPress={() => navigate('OffDef', { name: 'Inferno' })}
				/>
				<Button
					title="Dust2"
					onPress={() => navigate('OffDef', { name: 'Dust2' })}
				/>
				<Button
					title="Nuke"
					onPress={() => navigate('OffDef', { name: 'Nuke' })}
				/>
				<Button
					title="Train"
					onPress={() => navigate('OffDef', { name: 'Train' })}
				/>
				<Button
					title="Overpass"
					onPress={() => navigate('OffDef', { name: 'Overpass' })}
				/>
				<Button
					title="Vertigo"
					onPress={() => navigate('OffDef', { name: 'Vertigo' })}
				/>
			</React.Fragment>
		);
	}
}

class OffDefScreen extends React.Component {
	static navigationOptions = {
		title: 'Offense or Defense',
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props
		const mapName = this.props.navigation.getParam('name')
		return (
			<React.Fragment>
				<Text style={styles.welcome}>
					Offense or Defense?
				</Text>
				<Button
					title="Offense"
					onPress={() => navigate('Map', { side: 'Offense', map: mapName })}
				/>
				<Button
					title="Defense"
					onPress={() => navigate('Map', { side: 'Defense', map: mapName })}
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
		const mapName = this.props.navigation.getParam('map')
		const mapSide = this.props.navigation.getParam('side')
		return (
			<React.Fragment>
				<Text style={styles.welcome}>
					{mapName}
				</Text>
				<Button
					title="Pistol"
					onPress={() => navigate('Strats', { strat: 'Pistol', map: mapName, side: mapSide })}
				/>
				<Button
					title="Full Buy"
					onPress={() => navigate('Strats', { strat: 'Full Buy', map: mapName, side: mapSide })}
				/>
				<Button
					title="Force Buy"
					onPress={() => navigate('Strats', { strat: 'Force Buy', map: mapName, side: mapSide })}
				/>
				<Button
					title="Save"
					onPress={() => navigate('Strats', { strat: 'Save', map: mapName, side: mapSide })}
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
		const strats = {
			mirage: require('./strats/mirage.json'),
			inferno: require('./strats/inferno.json'),
			cache: require('./strats/cache.json'),
			dust2: require('./strats/dust2.json'),
			overpass: require('./strats/overpass.json'),
			nuke: require('./strats/nuke.json'),
			train: require('./strats/train.json'),
			vertigo: require('./strats/vertigo.json'),
		}

		const { navigate } = this.props.navigation;
		const navigation = this.props;
		const stratName = this.props.navigation.getParam('strat');
		const mapName = this.props.navigation.getParam('map').toLowerCase();
		const mapSide = this.props.navigation.getParam('side');
		const stratData = strats[mapName];
		var stratSelectedData = [];
		for (var i = 0; i < stratData.length; i++) {
			if ((stratData[i].Buy === stratName) && (stratData[i].Side === mapSide)) {
				stratSelectedData.push(stratData[i])
			}
		}

		const stratSelectedLength = stratSelectedData.length;
		if (stratSelectedLength === 0) {
			stratSelectedData.push({
				"Buy": "No Strats",
				"Start": "No Strats",
				"Mid": "No Strats",
				"Smokes": [],
				"Event": "No Strats",
				"Round": 0,
				"Team": "No Strats",
				"Side": "No Strats"
			})
			selectedStratsLength = 1;
		}
		const randomNumber = Math.floor(Math.random() * stratSelectedLength);
		const stratSelected = stratSelectedData[randomNumber]

		return (
			<React.Fragment>
				<Text style={styles.welcome}>
					{stratName} ({mapSide})
				</Text>
				<View style={styles.container, styles.flexWrapper}>
					<Text style={styles.center, styles.strats}><Text style={{ fontWeight: 'bold' }}>Start:</Text> {stratSelected.Start}</Text>
			<Text style={styles.center, styles.strats}><Text style={{ fontWeight: 'bold' }}>Middle:</Text> { stratSelected.Mid }</Text >
				<Text style={styles.center, styles.strats}><Text style={{ fontWeight: 'bold' }}>Smokes:</Text> {stratSelected.Smokes}</Text>
				<Text style={styles.center, styles.strats}><Text style={{ fontWeight: 'bold' }}>Team:</Text> {stratSelected.Team}</Text>
				<Text style={styles.center, styles.strats}><Text style={{ fontWeight: 'bold' }}>Event:</Text> {stratSelected.Event} - Round {stratSelected.Round}</Text>
				</View >
			</React.Fragment >
		);
	}
}

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	OffDef: { screen: OffDefScreen },
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

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });
