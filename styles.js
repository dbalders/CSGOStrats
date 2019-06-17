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

    //Navigation CSS
    linkContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    //Home Page CSS
    homeMap: {
        flex: 1,
        justifyContent: 'center',
    },

    // Strats css
    stratContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    stratHeader: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'lightgray',
        padding: 25
    },
    strat: {
        // width: '100%',
        margin: 10,
        flexDirection: 'row',
        height: 'auto'
        // alignItems: 'center'
    },
    stratTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        width: '20%',
        paddingTop: 4
    },
    stratDesc: {
        width: '80%',
        fontSize: 16,
        lineHeight: 25,
        letterSpacing: .2
    },
    stratAdd: {
        height: 75,
        marginTop: 'auto'
    }
})