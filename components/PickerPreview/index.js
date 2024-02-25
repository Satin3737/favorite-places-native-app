import {Image, Text, View} from 'react-native';
import styles from './styles';

const PickerPreview = ({isPicked = false, uri = '', label = ''}) => {
    return (
        <View style={styles.wrapper}>
            {!!isPicked ? (
                <Image style={styles.image} source={{uri}} />
            ) : (
                <Text style={styles.placeholder}>{label} not picked!</Text>
            )}
        </View>
    );
};

export default PickerPreview;
