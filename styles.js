import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // UNIVERSAL CSS
    container: {
        flex: 1,
        margin: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flexWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    flexContent: {
        flex: 3
    },
    flex: {
        display: 'flex'
    },
    flexVertical: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexOne: {
        flex: 1
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        textAlign: 'center',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    hide: {
        display: 'none',
    },
    noMargin: {
        margin: 0,
    },

    // Strats css
    strats: {
        width: 'auto',
        margin: 10
    }
})