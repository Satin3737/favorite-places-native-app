import {FlatList, Text, View} from 'react-native';
import PlacesItem from '../PlacesItem';
import styles from './styles';

const PlacesList = ({places}) => {
    return (
        <FlatList
            data={places}
            style={styles.list}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PlacesItem {...item} />}
            ListEmptyComponent={() => <Text style={styles.empty}>No places for now!</Text>}
            ItemSeparatorComponent={() => <View style={styles.gap} />}
        />
    );
};

export default PlacesList;
