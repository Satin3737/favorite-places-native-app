import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import PlaceForm from '../../components/PlaceForm';
import styles from './styles';

const AddPlace = () => {
    const {navigate} = useNavigation();

    const createPlaceHandler = place => {
        navigate('allPlaces', {place});
    };

    return (
        <View style={styles.screen}>
            <PlaceForm createPlaceHandler={createPlaceHandler} />
        </View>
    );
};

export default AddPlace;
