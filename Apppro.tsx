
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    useColorScheme
} from 'react-native';

function Apppro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    console.log(isDarkMode)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: 'blue',
            fontSize: 20, // optional, adjust as needed
        },
        darkText: {
            color: 'yellow',
            fontSize: 25
        },
        whiteText: {
            color: 'white',
            fontSize: 25
        },
        safeArea: {
            flex: 1, // Ensure SafeAreaView takes up the whole screen
        },
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>India</Text>
            </View>
        </SafeAreaView>

    );
}

export default Apppro;
