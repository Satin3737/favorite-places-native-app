import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const PlacesItem = ({title = '', imgUri = '', address = '', id = '', onPress = () => {}}) => {
    return (
        <Pressable
            style={({pressed}) => [styles.item, pressed && styles.pressed]}
            onPress={() => onPress(id)}
        >
            <Image source={{uri: imgUri}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </Pressable>
    );
};

export default PlacesItem;
