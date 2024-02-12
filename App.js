import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import styles from './styles';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style="auto" />
            <Text>test</Text>
        </View>
    );
};

export default App;
