import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import PlacesList from '../../components/PlacesList';
import {fetchPlaces} from '../../util/database';
import styles from './styles';

const AllPlaces = () => {
    const [placesList, setPlacesList] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            async function loadPlaces() {
                setPlacesList(await fetchPlaces());
            }

            loadPlaces();
        }
    }, [isFocused]);

    return (
        <View style={styles.screen}>
            <PlacesList places={placesList} />
        </View>
    );
};

export default AllPlaces;
