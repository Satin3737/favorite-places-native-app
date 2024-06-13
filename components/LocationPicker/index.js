import {useNavigation, useRoute} from '@react-navigation/native';
import {getCurrentPositionAsync, useForegroundPermissions} from 'expo-location';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {colors} from '../../const';
import {verifyPermissions} from '../../util/helper';
import {getAddressFromApi, getMapPreviewUri} from '../../util/location';
import PickerPreview from '../PickerPreview';
import CustomButton, {btnTypes} from '../ui/CustomButton';
import styles from './styles';

const LocationPicker = ({onLocationPicked}) => {
    const [locationPermission, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState(null);
    const {navigate} = useNavigation();
    const {params} = useRoute();

    const getLocationHandler = async () => {
        const hasPermissions = await verifyPermissions(locationPermission, requestPermission, 'location');
        if (!hasPermissions) {
            return;
        }

        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat: location?.coords?.latitude,
            lng: location?.coords?.longitude
        });
    };

    const pickOnMapHandler = () => {
        navigate('placesMap');
    };

    useEffect(() => {
        if (!!params) {
            setPickedLocation({
                lat: params.selectedLocation.latitude,
                lng: params.selectedLocation.longitude
            });
        }
    }, [params]);

    useEffect(() => {
        const handleLocation = async () => {
            if (!!pickedLocation) {
                const address = await getAddressFromApi(pickedLocation.lat, pickedLocation.lng);
                onLocationPicked({...pickedLocation, address});
            }
        };

        handleLocation().then();
    }, [onLocationPicked, pickedLocation]);

    return (
        <View>
            <PickerPreview
                label={'Location'}
                uri={getMapPreviewUri(pickedLocation)}
                isPicked={!!pickedLocation}
            />
            <View style={styles.buttons}>
                <CustomButton
                    label={'Locate User'}
                    type={btnTypes.flat}
                    iconProps={{name: 'location', color: colors.primary200}}
                    onPress={getLocationHandler}
                />
                <CustomButton
                    label={'Pick on Map'}
                    type={btnTypes.flat}
                    iconProps={{name: 'map', color: colors.primary200}}
                    onPress={pickOnMapHandler}
                />
            </View>
        </View>
    );
};

export default LocationPicker;
