import {PermissionStatus} from 'expo-location';
import {Alert} from 'react-native';

export const verifyPermissions = async (permission, requestPermission, permissionName) => {
    if (permission.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }

    if (permission.status === PermissionStatus.DENIED) {
        Alert.alert('Need permission!', `You need to grant ${permissionName} permissions to use app!`);
        return false;
    }

    return true;
};
