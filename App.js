/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
		title: 'Select a Map',
		headerBackTitle: 'Map Selection',
		headerRight: (
			<Button
			  onPress={() => alert('Notebook')}
			  title="Notebook"
			/>
		  ),
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/mirage.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Mirage' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Mirage
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/inferno.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Inferno' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Inferno
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/dust2.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'dust2' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								dust2
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/nuke.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Nuke' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Nuke
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/train.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Train' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Train
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/overpass.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Overpass' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Overpass
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>

				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/vertigo.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('OffDef', { name: 'Vertigo' })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Vertigo
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

class OffDefScreen extends React.Component {
	static navigationOptions = {
		title: 'T or CT',
		headerBackTitle: 'T/CT',
		headerRight: (
			<Button
			  onPress={() => alert('Notebook')}
			  title="Notebook"
			/>
		  ),
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props
		const mapName = this.props.navigation.getParam('name')
		return (
			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/terrorists.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Map', { side: 'Offense', map: mapName })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Terrorists
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/counter-terrorists.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Map', { side: 'Defense', map: mapName })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Counter-Terrorists
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'Round Buy',
		headerBackTitle: 'Round Buy',
		headerRight: (
			<Button
			  onPress={() => alert('Notebook')}
			  title="Notebook"
			/>
		  ),
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props
		// console.log(navigate)
		const mapName = this.props.navigation.getParam('map')
		const mapSide = this.props.navigation.getParam('side')
		return (

			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/pistol_round.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Strats', { strat: 'Pistol', map: mapName, side: mapSide })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Pistol
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/full_round.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Strats', { strat: 'Full Buy', map: mapName, side: mapSide })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Full Buy
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/force_round.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Strats', { strat: 'Force Buy', map: mapName, side: mapSide })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Force Buy
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/save_round.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Strats', { strat: 'Save', map: mapName, side: mapSide })}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Save
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

class StratsScreen extends React.Component {
	static navigationOptions = {
		title: 'Strats',
		headerRight: (
			<Button
			  onPress={() => alert('Notebook')}
			  title="Notebook"
			/>
		  ),
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

			<View style={styles.stratContainer}>
				<Text style={styles.stratHeader}>
					{stratName} ({mapSide})
			 	</Text>
				<View style={styles.strat}>
					<Text style={styles.stratTitle}>Start: </Text>
					<Text style={styles.stratDesc}>{stratSelected.Start}</Text>
				</View>
				<View style={styles.strat}>
					<Text style={styles.stratTitle}>Middle: </Text>
					<Text style={styles.stratDesc}>{stratSelected.Mid}</Text>
				</View>
				<View style={styles.strat}>
					<Text style={styles.stratTitle}>Smokes: </Text>
					<Text style={styles.stratDesc}>{stratSelected.Smokes}</Text>
				</View>
				<View style={styles.strat}>
					<Text style={styles.stratTitle}>Team: </Text>
					<Text style={styles.stratDesc}>{stratSelected.Team}</Text>
				</View>
				<View style={styles.strat}>
					<Text style={styles.stratTitle}>Event: </Text>
					<Text style={styles.stratDesc}>{stratSelected.Event} - Round {stratSelected.Round}</Text>
				</View>
				<View style={styles.stratAdd}>
					<TouchableOpacity
						// onPress={() => navigate('Strats', { strat: 'Save', map: mapName, side: mapSide })}
						style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
						<Text
							style={{ opacity: 1, textAlign: 'center', fontSize: 20, color: 'white' }}>
							Add Strat to Notebook
						</Text>
					</TouchableOpacity>
				</View>
			</View >
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