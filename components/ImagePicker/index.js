import {launchCameraAsync, useCameraPermissions} from 'expo-image-picker';
import {useState} from 'react';
import {View} from 'react-native';
import {colors} from '../../const';
import {verifyPermissions} from '../../util/helper';
import PickerPreview from '../PickerPreview';
import CustomButton, {btnTypes} from '../ui/CustomButton';
import styles from './styles';

const ImagePicker = ({onImagePicked}) => {
    const [cameraPermission, requestPermission] = useCameraPermissions();
    const [imageUri, setImageUri] = useState();

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions(cameraPermission, requestPermission, 'camera');
        if (!hasPermissions) {
            return;
        }
        const image = await launchCameraAsync({allowsEditing: true, aspect: [16, 9], quality: 0.5});

        if (!image?.canceled) {
            const res = image?.assets[0]?.uri;
            setImageUri(res);
            onImagePicked(res);
        }
    };

    return (
        <View>
            <PickerPreview label={'Image'} uri={imageUri} isPicked={!!imageUri} />
            <CustomButton
                label={!!imageUri ? 'Take another image' : 'Take image'}
                type={btnTypes.flat}
                iconProps={{
                    name: 'camera',
                    color: colors.primary200
                }}
                buttonOuterStyles={[styles.btn]}
                onPress={takeImageHandler}
            />
        </View>
    );
};

export default ImagePicker;
