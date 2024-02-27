import {useCallback, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';
import CustomButton from '../ui/CustomButton';
import styles from './styles';

const PlaceForm = () => {
    const [titleValue, setTitleValue] = useState('');
    const [pickedImage, setPickedImage] = useState(null);
    const [pickedLocation, setPickedLocation] = useState(null);

    const changeTitleHandler = value => setTitleValue(value);

    const onSubmitHandler = () => {
        console.log(titleValue);
        console.log(pickedImage);
        console.log(pickedLocation);
    };

    const onImagePicked = useCallback(imageUri => setPickedImage(imageUri), []);
    const onLocationPicked = useCallback(location => setPickedLocation(location), []);

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={titleValue} />
            </View>
            <ImagePicker onImagePicked={onImagePicked} />
            <LocationPicker onLocationPicked={onLocationPicked} />
            <CustomButton label={'Add place'} onPress={onSubmitHandler} buttonOuterStyles={[styles.submit]} />
        </ScrollView>
    );
};

export default PlaceForm;
