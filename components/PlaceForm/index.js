import {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';
import styles from './styles';

const PlaceForm = () => {
    const [titleValue, setTitleValue] = useState('');

    const changeTitleHandler = value => setTitleValue(value);

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={titleValue} />
            </View>
            <ImagePicker />
            <LocationPicker />
        </ScrollView>
    );
};

export default PlaceForm;
