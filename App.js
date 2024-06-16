import {hideAsync} from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import Navigation from './Navigation';
import styles from './styles';
import {initDb} from './util/database';

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await hideAsync();
        }
    }, [appIsReady]);

    useEffect(() => {
        initDb()
            .then(() => setAppIsReady(true))
            .catch(error => console.error(error));
    }, []);

    return (
        appIsReady && (
            <View style={styles.screen} onLayout={onLayoutRootView}>
                <StatusBar style={'dark'} />
                <Navigation />
            </View>
        )
    );
};

export default App;
