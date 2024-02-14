import {PermissionStatus, launchCameraAsync, useCameraPermissions} from 'expo-image-picker';
import {useState} from 'react';
import {Alert, Button, Image, Text, View} from 'react-native';
import CustomButton from '../ui/CustomButton';
import styles from './styles';

const ImagePicker = () => {
    const [cameraPermission, requestPermission] = useCameraPermissions();
    const [imageUri, setImageUri] = useState();

    const verifyPermissions = async () => {
        if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermission.status === PermissionStatus.DENIED) {
            Alert.alert('Need permission!', 'You need to grant camera permissions to use app!');
            return false;
        }

        return true;
    };

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return;
        }
        const image = await launchCameraAsync({allowsEditing: true, aspect: [16, 9], quality: 0.5});
        !image?.canceled && setImageUri(image?.assets[0]?.uri);
    };

    return (
        <View>
            <View style={styles.wrapper}>
                {!!imageUri ? (
                    <Image style={styles.image} source={{uri: imageUri}} />
                ) : (
                    <Text style={styles.placeholder}>Image not picked!</Text>
                )}
            </View>
            <CustomButton
                label={!!imageUri ? 'Take another image' : 'Take image'}
                iconProps={{
                    name: 'camera'
                }}
                onPress={takeImageHandler}
            />
        </View>
    );
};

export default ImagePicker;
