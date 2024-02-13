import {View} from 'react-native';
import PlacesList from '../../components/PlacesList';
import styles from './styles';

const AllPlaces = () => {
    return (
        <View style={styles.screen}>
            <PlacesList />
        </View>
    );
};

export default AllPlaces;
