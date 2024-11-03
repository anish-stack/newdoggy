import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function Card({ data }) {
    if (!data) {
        return (
            <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No Data Found</Text>
            </View>
        );
    }

    return (
        <>
        
        <View style={styles.card}>
            <Image 
                source={{ uri: data.Image.url }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
                    <Text style={styles.cardTitle}>{data.CategoryTitle || "Category Title"}</Text>
        </>

    );
}

const styles = StyleSheet.create({
    card: {
        marginLeft:22,
        width: 70,      
        height: 70, 
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 4,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        margin: 8,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
        borderRadius: 50,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#d44436',
        textAlign: 'center',
    },
    noDataContainer: {
        alignItems: 'center',
        padding: 20,
    },
    noDataText: {
        color: '#888',
        fontSize: 16,
    },
});
