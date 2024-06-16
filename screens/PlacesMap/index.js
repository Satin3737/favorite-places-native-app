import {useCallback, useLayoutEffect, useState} from 'react';
import {Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import IconButton from '../../components/ui/IconButton';
import styles from './styles';

const PlacesMap = ({route, navigation}) => {
    const {navigate, setOptions} = navigation;
    const initialLocation = !!route.params ? {latitude: route.params.lat, longitude: route.params.lng} : null;
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude: initialLocation?.latitude ?? 37.78,
        longitude: initialLocation?.longitude ?? -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const onSelectLocation = e => {
        if (!!initialLocation) {
            return;
        }

        const {latitude, longitude} = e?.nativeEvent?.coordinate;
        setSelectedLocation({latitude, longitude});
    };

    const savePickedLocation = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert('No location picked!', 'You have to picked location on map!');
            return;
        }

        navigation.navigate('addPlace', {selectedLocation});
    }, [selectedLocation, navigate]);

    useLayoutEffect(() => {
        !!initialLocation
            ? setOptions({title: route.params?.title + ' on Map'})
            : setOptions({
                  headerRight: ({tintColor}) => (
                      <IconButton icon={'save'} color={tintColor} onPress={savePickedLocation} />
                  )
              });
    }, [setOptions, savePickedLocation, initialLocation]);

    return (
        <MapView style={styles.map} initialRegion={region} onPress={onSelectLocation}>
            {!!selectedLocation && <Marker title={'Picked location'} coordinate={selectedLocation} />}
        </MapView>
    );
};

export default PlacesMap;
