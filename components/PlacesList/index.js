import {FlatList, Text, View} from 'react-native';
import PlacesItem from '../PlacesItem';
import styles from './styles';

const PlacesList = ({places}) => {
    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PlacesItem place={item} />}
        />
    );
};

export default PlacesList;
