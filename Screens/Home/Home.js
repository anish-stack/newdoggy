import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Layout from '../../layouts/Layout'
import Slider from '../../components/Slider/Slider';
import LocationTab from '../../layouts/locationTab';
import Categories from '../../components/Categories/Categories';
import Doctors from '../Doctors/Doctors';

export default function Home() {
    return (
        <Layout>
            <View style={styles.container}>
                <LocationTab />
                <Slider />
                <Categories/>
                <Doctors/>

            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1D3D47', // Dark color for contrast
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
    },
});
