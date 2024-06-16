import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import CustomButton, {btnTypes} from '../../components/ui/CustomButton';
import {colors} from '../../const';
import {fetchPlaceDetails} from '../../util/database';
import styles from './styles';

const PlaceDetails = ({route, navigation}) => {
    const placeId = route.params.placeId;
    const [place, setPlace] = useState(null);

    const showOnMapHandler = () => {
        navigation.navigate('placesMap', {...place.location, title: place.title});
    };

    useEffect(() => {
        async function fetchCurrentPlace() {
            const fetchedPlace = await fetchPlaceDetails(placeId);
            setPlace(fetchedPlace);
            navigation.setOptions({title: fetchedPlace.title});
        }

        fetchCurrentPlace();
    }, [placeId]);

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            {!place ? (
                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>Loading place data...</Text>
                </View>
            ) : (
                <>
                    <Image style={styles.image} source={{uri: place.imgUri}} />
                    <View style={styles.location}>
                        <View style={styles.address}>
                            <Text style={styles.addressText}>{place?.address}</Text>
                        </View>
                        <CustomButton
                            type={btnTypes.flat}
                            buttonOuterStyles={[styles.btn]}
                            label={'View on Map'}
                            iconProps={{name: 'map', color: colors.primary500}}
                            onPress={showOnMapHandler}
                        />
                    </View>
                </>
            )}
        </ScrollView>
    );
};

export default PlaceDetails;
