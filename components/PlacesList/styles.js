import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    list: {
        marginVertical: 24,
        marginHorizontal: 16
    },
    empty: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: colors.primary700
    },
    gap: {
        height: 12
    }
});

export default styles;
