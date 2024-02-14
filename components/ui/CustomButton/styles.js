import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    buttonOuter: {
        flex: 1,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: colors.primary500
    },
    flatOuter: {
        backgroundColor: 'transparent',
        borderColor: colors.primary100,
        borderWidth: 1
    },
    buttonInner: {
        padding: 12,
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatInner: {
        paddingVertical: 11
    },
    text: {
        color: colors.primary800,
        textAlign: 'center'
    },
    flatText: {
        color: colors.primary200
    },
    pressed: {
        opacity: 0.8,
        borderRadius: 4,
        overflow: 'hidden'
    }
});

export default styles;
