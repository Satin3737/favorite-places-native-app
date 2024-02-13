import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const PlacesItem = ({title, imgUri, address, location}) => {
    return (
        <Pressable>
            <Image source={{uri: imgUri}} />
            <View>
                <Text>{title}</Text>
                <Text>{address}</Text>
            </View>
        </Pressable>
    );
};

export default PlacesItem;
