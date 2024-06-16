import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import PlaceForm from '../../components/PlaceForm';
import {insertPlace} from '../../util/database';
import styles from './styles';

const AddPlace = () => {
    const {navigate} = useNavigation();

    const createPlaceHandler = async place => {
        await insertPlace(place);
        navigate('allPlaces');
    };

    return (
        <View style={styles.screen}>
            <PlaceForm createPlaceHandler={createPlaceHandler} />
        </View>
    );
};

export default AddPlace;
