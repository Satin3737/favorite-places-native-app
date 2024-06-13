import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        backgroundColor: colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {width: 1, height: 1}
    },
    pressed: {
        opacity: 0.8
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },
    info: {
        flex: 2,
        padding: 12
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        color: colors.gray700
    },
    address: {
        fontSize: 12,
        color: colors.gray700
    }
});

export default styles;
