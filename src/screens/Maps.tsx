import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { ImageBackground } from 'react-native';

const GradientScreenWithTabs = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View style={styles.container}>

                <LinearGradient
                    // colors={['rgba(25, 202, 159, 0.3)', 'rgba(1, 2, 2, 1)', 'rgba(24, 69, 124, 0.57)', 'rgba(10, 12, 16, 1)']}
                    colors={['#0D3F31', '#0C2E32', '#0A1D33', '#091634']}
                    locations={[0.1, 0.4, 0.6, 0.9]}
                    start={{ x: 0.0, y: 0.2 }} end={{ x: 1.2, y: 0.5 }}

                    style={styles.gradient}
                >
                    {/* <ImageBackground
                        source={require("../assets/images/gradient.png")}
                        style={styles.gradient}
                    >
                    </ImageBackground> */}
                </LinearGradient>
                <View style={styles.contentContainer}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    contentContainer: {
        flex: 1,

    },

});

export default GradientScreenWithTabs;