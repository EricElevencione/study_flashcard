import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    flipCard: {
        width: 200,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    flipCardBack: {
        backgroundColor: 'tomato',
        position: 'absolute',
        top: 0,
    },
    flipText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
