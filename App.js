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
import store from 'react-native-simple-store';
import styles from './styles'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {

	componentDidMount() {
		this.props.navigation.setParams({
			getStrats: this.getStrats.bind(this)
		});
	}

	static navigationOptions = ({ navigation }) => ({
		title: 'Select a Map',
		headerBackTitle: 'Map Selection',
		headerRight: (
			<Button
				onPress={() => { navigation.state.params.getStrats() }}
				title="Notebook"
			/>
		)
	})

	getStrats() {
		const { navigate } = this.props.navigation;
		store.get('strats')
			.then(res => {
				if (res !== null) {
					navigate('HomeNotebook', { data: res })
				} else {
					alert('No strategies saved')
				}

			})
	}

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
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/vertigo.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => store.delete('strats')}
							style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
							<Text
								style={{ opacity: 1, textAlign: 'center', fontSize: 40, color: 'white' }}>
								Clear Data
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

class HomeScreenNotebook extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			mirageShow: false,
			infernoShow: false,
			dust2Show: false,
			nukeShow: false,
			overpassShow: false,
			trainShow: false,
			vertigoShow: false,
			cacheShow: false,
			mirageStrats: [],
			infernoStrats: [],
			dust2Strats: [],
			nukeStrats: [],
			overpassStrats: [],
			trainStrats: [],
			vertigoStrats: [],
			cacheStrats: []
		}
	}

	componentDidMount() {
		const notebookData = this.props.navigation.getParam('data', [])

		if (notebookData.length > 0) {
			var mirageStrats = [];
			var infernoStrats = [];
			var dust2Strats = [];
			var nukeStrats = [];
			var overpassStrats = [];
			var trainStrats = [];
			var cacheStrats = [];
			var vertigoStrats = [];

			var mirageShow = false;
			var infernoShow = false;
			var dust2Show = false;
			var overpassShow = false;
			var nukeShow = false;
			var trainShow = false;
			var cacheShow = false;
			var vertigoShow = false;

			for (var i = 0; i < notebookData.length; i++) {
				if (notebookData[i].Map === "Mirage") {
					mirageStrats.push(notebookData[i]);
					mirageShow = true;
				}
				if (notebookData[i].Map === "Inferno") {
					infernoStrats.push(notebookData[i]);
					infernoShow = true;
				}
				if (notebookData[i].Map === "Dust2") {
					dust2Strats.push(notebookData[i]);
					dust2Show = true;
				}
				if (notebookData[i].Map === "Nuke") {
					nukeStrats.push(notebookData[i]);
					nukeShow = true;
				}
				if (notebookData[i].Map === "Overpass") {
					overpassStrats.push(notebookData[i]);
					overpassShow = true;
				}
				if (notebookData[i].Map === "Train") {
					trainStrats.push(notebookData[i]);
					trainShow = true;
				}
				if (notebookData[i].Map === "Cache") {
					cacheStrats.push(notebookData[i]);
					cacheShow = true;
				}
				if (notebookData[i].Map === "Vertigo") {
					vertigoStrats.push(notebookData[i]);
					vertigoShow = true;
				}
			}
			this.setState({
				mirageShow: mirageShow,
				infernoShow: infernoShow,
				dust2Show: dust2Show,
				nukeShow: nukeShow,
				overpassShow: overpassShow,
				trainShow: trainShow,
				cacheShow: cacheShow,
				vertigoShow: vertigoShow,
				mirageStrats: mirageStrats,
				infernoStrats: infernoStrats,
				dust2tratsw: dust2Strats,
				nukeStrats: nukeStrats,
				overpassStrats: overpassStrats,
				trainStrats: trainStrats,
				cacheStrats: cacheStrats,
				vertigoStrats: vertigoStrats
			})
		}
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/mirage.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							disabled={!this.state.mirageShow}
							onPress={() => navigate('OffDef', { name: 'Mirage', data: this.state.mirageStrats })}
							style={[styles.mapList, this.state.mirageShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.mirageShow ? '' : styles.noStratsText]}>
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
							disabled={!this.state.infernoShow}
							onPress={() => navigate('OffDef', { name: 'Inferno', data: this.state.infernoStrats })}
							style={[styles.mapList, this.state.infernoShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.infernoShow ? '' : styles.noStratsText]}>
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
							disabled={!this.state.dust2Show}
							onPress={() => navigate('OffDef', { name: 'dust2', data: this.state.dust2Strats })}
							style={[styles.mapList, this.state.dust2Show ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.dust2Show ? '' : styles.noStratsText]}>
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
							disabled={!this.state.nukeShow}
							onPress={() => navigate('OffDef', { name: 'Nuke', data: this.state.nukeStrats })}
							style={[styles.mapList, this.state.nukeShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.nukeShow ? '' : styles.noStratsText]}>
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
							disabled={!this.state.trainShow}
							onPress={() => navigate('OffDef', { name: 'Train', data: this.state.trainStrats })}
							style={[styles.mapList, this.state.trainShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.trainShow ? '' : styles.noStratsText]}>
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
							disabled={!this.state.overpassShow}
							onPress={() => navigate('OffDef', { name: 'Overpass', data: this.state.overpassStrats })}
							style={[styles.mapList, this.state.overpassShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.overpassShow ? '' : styles.noStratsText]}>
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
							disabled={!this.state.overpassShow}
							onPress={() => navigate('OffDef', { name: 'Vertigo', data: this.state.vertigoStrats })}
							style={[styles.mapList, this.state.vertigoShow ? '' : styles.noStrats]}>
							<Text
								style={[styles.mapListText, this.state.vertigoShow ? '' : styles.noStratsText]}>
								Vertigo
							</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View >
		);
	}
}

class OffDefScreen extends React.Component {
	static navigationOptions = {
		title: 'T or CT',
		headerBackTitle: 'T/CT',
	};
	render() {
		const { navigate } = this.props.navigation;;
		const navigation = this.props;
		const mapName = this.props.navigation.getParam('name');
		const notebookData = this.props.navigation.getParam('data', []);
		return (
			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/terrorists.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Map', { side: 'Offense', map: mapName, data: notebookData })}
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
							onPress={() => navigate('Map', { side: 'Defense', map: mapName, data: notebookData })}
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
	};
	render() {
		const { navigate } = this.props.navigation;
		const navigation = this.props;
		const mapName = this.props.navigation.getParam('map');
		const mapSide = this.props.navigation.getParam('side');
		const notebookData = this.props.navigation.getParam('data', []);

		return (
			<View style={styles.linkContainer}>
				<View style={styles.homeMap}>
					<ImageBackground
						source={require('./images/pistol_round.jpg')}
						style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => navigate('Strats', { strat: 'Pistol', map: mapName, side: mapSide, data: notebookData })}
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
							onPress={() => navigate('Strats', { strat: 'Full Buy', map: mapName, side: mapSide, data: notebookData })}
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
							onPress={() => navigate('Strats', { strat: 'Force Buy', map: mapName, side: mapSide, data: notebookData })}
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
							onPress={() => navigate('Strats', { strat: 'Save', map: mapName, side: mapSide, data: notebookData })}
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
	constructor(props) {
		super(props)
		this.state = {
			stratSaved: false,
			allNotebookData: []
		}
	}

	static navigationOptions = {
		title: 'Strats',
	};

	componentWillMount() {
		store.get('strats')
			.then(res => {
				allNotebookData = res;
				var stratSelected = this.props.navigation.getParam('data', []);
				var stratSaved = false;
				for (var i = 0; i < allNotebookData.length; i++) {
					if ((allNotebookData[i].Map === stratSelected.Map) & (allNotebookData[i].id === stratSelected.id)) {
						stratSaved = true;
					}
				}
				this.setState({
					'stratSaved': true,
					allNotebookData: allNotebookData
				})
			})
	}

	addStrat(stratSelected) {
		store.push('strats', stratSelected);
	}

	removeStrat(stratSelected) {
		const { navigate } = this.props.navigation;
		var allNotebookData = [];

		store.get('strats')
			.then(res => {
				allNotebookData = res;
				for (var i = 0; i < allNotebookData.length; i++) {
					if ((allNotebookData[i].Map === stratSelected.Map) & (allNotebookData[i].id === stratSelected.id)) {
						allNotebookData.splice(i, 1);
						break;
					}
				}
				store.delete('strats')
				if (allNotebookData.length > 0) {
					for (i = 0; i < allNotebookData.length; i++) {
						store.push('strats', allNotebookData[i]);
					}
					navigate('HomeNotebook', { data: allNotebookData });
				} else {
					navigate('Home')
				}
			})
	}

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
		const notebookData = this.props.navigation.getParam('data', []);
		var stratData = [];
		var addRemoveText;

		if (notebookData.length > 0) {
			stratData = notebookData;
			addRemoveText = <TouchableOpacity
				onPress={() => this.removeStrat(stratSelected)}
				style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
				<Text
					style={{ opacity: 1, textAlign: 'center', fontSize: 20, color: 'white' }}>
					Remove Strat from Notebook
			</Text>
			</TouchableOpacity>
		} else {
			stratData = strats[mapName];
			addRemoveText = <TouchableOpacity
				onPress={() => this.addStrat(stratSelected)}
				style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: 'center' }}>
				<Text
					style={{ opacity: 1, textAlign: 'center', fontSize: 20, color: 'white' }}>
					Add Strat to Notebook
			</Text>
			</TouchableOpacity>
		}

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
					{addRemoveText}
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
	HomeNotebook: { screen: HomeScreenNotebook }

});

const App = createAppContainer(MainNavigator);

export default App;