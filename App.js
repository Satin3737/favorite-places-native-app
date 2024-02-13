import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navigation from './Navigation';
import styles from './styles';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style={'dark'} />
            <Navigation />
        </View>
    );
};

export default App;
