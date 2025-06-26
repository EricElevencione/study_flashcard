import React, { useRef, useState } from 'react';
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../assets/css/flipCardStyle'; // Adjust the path if needed

interface Card {
    id: string;
    question: string;
    answer: string;
}

interface FlipCardProps {
    cards: Card[];
}

const FlipCardItem = ({ card }: { card: Card }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        Animated.spring(animatedValue, {
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
            friction: 8,
            tension: 10,
        }).start();
        setIsFlipped(!isFlipped);
    };

    const frontAnimatedStyle = {
        transform: [
            {
                rotateY: animatedValue.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['0deg', '180deg'],
                }),
            },
        ],
    };

    const backAnimatedStyle = {
        transform: [
            {
                rotateY: animatedValue.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['180deg', '360deg'],
                }),
            },
        ],
    };

    return (
        <TouchableWithoutFeedback onPress={flipCard}>
            <View style={styles.container}>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <Text style={styles.flipText}>{card.question}</Text>
                </Animated.View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                    <Text style={styles.flipText}>{card.answer}</Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const FlipCard: React.FC<FlipCardProps> = ({ cards }) => {
    return (
        <View>
            {cards.map((card) => (
                <FlipCardItem key={card.id} card={card} />
            ))}
        </View>
    );
};

export default FlipCard;
