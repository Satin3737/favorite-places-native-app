import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: '40%',
        width: '100%',
        minHeight: 300
    },
    location: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    address: {
        padding: 20
    },
    addressText: {
        color: colors.primary500,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700'
    },
    btn: {
        flex: 0
    },
    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholderText: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.primary500,
        fontWeight: '700'
    }
});

export default styles;
