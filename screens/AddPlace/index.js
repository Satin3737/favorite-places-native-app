import {View} from 'react-native';
import PlaceForm from '../../components/PlaceForm';
import styles from './styles';

const AddPlace = () => {
    return (
        <View style={styles.screen}>
            <PlaceForm />
        </View>
    );
};

export default AddPlace;
