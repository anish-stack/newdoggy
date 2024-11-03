import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Card from '../card/Card';

const { width } = Dimensions.get('window')

export default function Categories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.doggy.adsdigitalmedia.com/api/v1/Product/Get-All-category');
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const memoizedData = useMemo(() => data, [data]);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#ee5e50" />
                <Text style={styles.loadingText}>Loading Categories...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {memoizedData && memoizedData.length > 0 ? (
                <View style={styles.cardsContainer}>
                    {memoizedData.map((item, index) => (
                        <View style={styles.cardWrapper} key={index}>
                            <Card data={item} />
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={styles.noDataText}>No Categories Available</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        padding: 12,
        marginBottom: 60,
        backgroundColor: '#f9f9f9',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    loadingText: {
        marginTop: 10,
        color: '#555',
        fontSize: 16,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
    },
    cardWrapper: {
        width: width * 0.3,
        marginBottom: 15,
    },
    noDataText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
});
