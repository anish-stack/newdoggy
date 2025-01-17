import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Tabs from './Tabs';
import Popup from '../components/PopUp/Popup';

export default function Layout({ children }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.childContainer}>
                    {children}
                </ScrollView>
                <Tabs />
            </View>
            <Popup />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    childContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
});
