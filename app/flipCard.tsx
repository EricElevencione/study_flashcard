import React, { useRef, useState } from 'react';
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../assets/css/flipCardStyle';

export default function FlipCard() {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isFlipped, setIsFlipped] = useState(false);

    // Interpolation
    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const flipCard = () => {
        if (isFlipped) {
            Animated.spring(animatedValue, {
                toValue: 0,
                useNativeDriver: true,
                friction: 8,
                tension: 10,
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                useNativeDriver: true,
                friction: 8,
                tension: 10,
            }).start();
        }
        setIsFlipped(!isFlipped);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={flipCard}>
                <View>
                    <Animated.View style={[styles.flipCard, { transform: [{ rotateY: frontInterpolate }] }]}>
                        <Text style={styles.flipText}>Front flipCard</Text>
                    </Animated.View>
                    <Animated.View style={[styles.flipCard, styles.flipCardBack, { transform: [{ rotateY: backInterpolate }] }]}>
                        <Text style={styles.flipText}>Back flipCard</Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
