import {getCurrentPositionAsync, useForegroundPermissions} from 'expo-location';
import {useState} from 'react';
import {View} from 'react-native';
import {colors} from '../../const';
import {verifyPermissions} from '../../util/helper';
import {getMapPreviewUri} from '../../util/location';
import PickerPreview from '../PickerPreview';
import CustomButton, {btnTypes} from '../ui/CustomButton';
import styles from './styles';

const ImagePicker = () => {
    const [locationPermission, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState(null);

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

    const pickOnMapHandler = () => {};

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

export default ImagePicker;
