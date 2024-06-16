import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconButton from '../components/ui/IconButton';
import {colors} from '../const';
import AddPlace from '../screens/AddPlace';
import AllPlaces from '../screens/AllPlaces';
import PlaceDetails from '../screens/PlaceDetails';
import PlacesMap from '../screens/PlacesMap';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: colors.primary500},
                    headerTintColor: colors.gray700,
                    contentStyle: {backgroundColor: colors.gray700}
                }}
            >
                <Stack.Screen
                    name={'allPlaces'}
                    component={AllPlaces}
                    options={({navigation}) => ({
                        title: 'Favorite Places',
                        headerRight: ({tintColor}) => (
                            <IconButton
                                icon={'add'}
                                color={tintColor}
                                onPress={() => navigation.navigate('addPlace')}
                            />
                        )
                    })}
                />
                <Stack.Screen
                    name={'addPlace'}
                    component={AddPlace}
                    options={{title: 'New Favorite Place'}}
                />
                <Stack.Screen name={'placesMap'} component={PlacesMap} options={{title: 'Add place'}} />
                <Stack.Screen
                    name={'placeDetails'}
                    component={PlaceDetails}
                    options={{title: 'Loading place...'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
