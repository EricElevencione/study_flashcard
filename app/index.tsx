import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';


export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Enter" onPress={() => router.push('/dashboardScreen')} />
        </View>
    );
}