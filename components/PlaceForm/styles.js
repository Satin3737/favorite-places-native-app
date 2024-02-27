import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    label: {
        fontWeight: 'bold',
        color: colors.primary500,
        marginBottom: 4
    },
    input: {
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary700,
        backgroundColor: colors.primary100
    },
    submit: {
        marginTop: 24
    }
});

export default styles;
