import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary700,
        backgroundColor: colors.primary100
    }
});

export default styles;
