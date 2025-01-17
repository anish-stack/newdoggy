import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

export default function Tabs() {
    const [active, setActive] = useState('home'); // Initialize with 'home' as active

    const handleClick = (tab) => {
        setActive(tab); // Set the active tab to the clicked tab
    };

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity
                style={[styles.tab, active === 'clinic' && styles.activeTab]}
                onPress={() => handleClick('clinic')}
            >
                <Icon name="medkit" style={styles.icon} />
                <Text style={styles.tabText}>Clinic</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, active === 'packages' && styles.activeTab]}
                onPress={() => handleClick('packages')}
            >
                <Icon name="clipboard" style={styles.icon} />
                <Text style={styles.tabText}>Packages</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.centerTab, active === 'home' && styles.activeCenterTab]}
                onPress={() => handleClick('home')}
            >
                <Icon name="home" style={styles.icon} />
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, active === 'doctors' && styles.activeTab]}
                onPress={() => handleClick('doctors')}
            >
                <Icon name="stethoscope" style={styles.icon} />
                <Text style={styles.tabText}>Doctors</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, active === 'profile' && styles.activeTab]}
                onPress={() => handleClick('profile')}
            >
                <Icon name="user" style={styles.icon} />
                <Text style={styles.tabText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ee5e50',
        elevation: 2,
        position: 'absolute', // This keeps it positioned absolutely
        bottom: 0, // Aligns it to the bottom of the screen
        left: 0, // Aligns it to the left side of the screen
        right: 0, // Aligns it to the right side of the screen
        paddingVertical: 10,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#D9534F',
        borderRadius: 30,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F6A69E',
        paddingVertical: 10,
        top: -15,
        position: 'relative',
    },
    centerTab: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EC4C3C',
        borderRadius: 10,

        paddingVertical: 10,
    },
    activeCenterTab: {
        backgroundColor: '#D9534F',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        top: -15,
        position: 'relative',
        backgroundColor: '#D9534F',
    },
    icon: {
        fontSize: 24,
        color: '#fff', // Change icon color for better visibility
    },
    tabText: {
        fontSize: 12,
        color: '#fff', // Change text color for better visibility
    },
});
