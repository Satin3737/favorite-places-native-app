import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 16,
        borderRadius: 4,
        backgroundColor: colors.primary100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    placeholder: {
        color: colors.primary700,
        fontSize: 16,
        textAlign: 'center'
    }
});

export default styles;
