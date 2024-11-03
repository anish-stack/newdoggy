import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo/dogy-world-logo-b.webp';

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="bars" style={styles.Weight} size={24} color="#000" />
            </TouchableOpacity>

            <Image source={logo} style={styles.logo} />

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="search" size={24} color="#EE5E50" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="bell-o" size={24} color="#EE5E50" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="shopping-bag" size={24} color="#EE5E50" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row', // Ensures items are in a row
        alignItems: 'center', // Centers content vertically
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
        elevation: 3, // Adds a shadow effect
    },
    logo: {
        width: 100, 
        height: 40, 
        resizeMode: 'contain',    

    },
    iconsContainer: {
        flexDirection: 'row',
        marginLeft: 'auto', 
    },
    iconContainer: {
        fontWeight: 400,
        marginHorizontal: 10,
        padding: 5, 
    },
    Weight: {
        fontWeight: 400,
    }
});
