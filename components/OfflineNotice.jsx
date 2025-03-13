import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const useNetworkStatus = () => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });
        return () => unsubscribe();
    }, []);

    return isConnected;
};

const OfflineNotice = () => {
    const isConnected = useNetworkStatus();

    return (
        <View style={styles.container}>
            {!isConnected ? (
                <Text style={styles.text}>You are offline</Text>
            ) : (
                <Text style={styles.text}>You are online</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

export default OfflineNotice;
