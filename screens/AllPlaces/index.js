import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import PlacesList from '../../components/PlacesList';
import styles from './styles';

const AllPlaces = ({route}) => {
    const [placesList, setPlacesList] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && route.params) {
            setPlacesList(curPlaces => [...curPlaces, route.params.place]);
        }
    }, [isFocused, route]);

    return (
        <View style={styles.screen}>
            <PlacesList places={placesList} />
        </View>
    );
};

export default AllPlaces;
