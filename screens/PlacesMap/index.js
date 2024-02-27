import {useNavigation} from '@react-navigation/native';
import {useCallback, useLayoutEffect, useState} from 'react';
import {Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import IconButton from '../../components/ui/IconButton';
import styles from './styles';

const PlacesMap = () => {
    const {navigate, setOptions} = useNavigation();
    const [selectedLocation, setSelectedLocation] = useState(null);

    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const onSelectLocation = e => {
        const {latitude, longitude} = e?.nativeEvent?.coordinate;
        setSelectedLocation({latitude, longitude});
    };

    const savePickedLocation = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert('No location picked!', 'You have to picked location on map!');
            return;
        }

        navigate('addPlace', {selectedLocation});
    }, [selectedLocation, navigate]);

    useLayoutEffect(() => {
        setOptions({
            headerRight: ({tintColor}) => (
                <IconButton icon={'save'} color={tintColor} onPress={savePickedLocation} />
            )
        });
    }, [setOptions, savePickedLocation]);

    return (
        <MapView style={styles.map} initialRegion={region} onPress={onSelectLocation}>
            {!!selectedLocation && <Marker title={'Picked location'} coordinate={selectedLocation} />}
        </MapView>
    );
};

export default PlacesMap;
