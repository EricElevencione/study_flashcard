import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from '../assets/css/addQuestionPage';
import FlipCard from './flipCard';

interface Card {
    id: string;
    question: string;
    answer: string;
}

interface FlipCardProps {
    cards: Card[];
}

const FlipCardComponent: React.FC<FlipCardProps> = FlipCard;

export default function add_Questions() {
    const [question, setQuestion] = useState(''); // Initialize with an empty string hook
    const [answer, setAnswer] = useState(''); // Initialize with an empty string hook
    const [cards, setCards] = useState<Card[]>([]); // Initialize with an empty array hook

    const handleAddCard = async () => {
        if (question.trim() === '' || answer.trim() === '') return; // Check if question or answer is empty, if yes return, 
        // if not continue

        setCards([...cards, { id: Date.now().toString(), question, answer }]); // Create a new array with the existing 
        // cards and add a new card object to the end
        setQuestion(''); // Clear the input fields
        setAnswer(''); // Clear the input fields

        // Save the updated cards to AsyncStorage

        try {
            await AsyncStorage.setItem('cards', JSON.stringify(cards)); // Store the updated cards array in AsyncStorage 
            // under the key 'cards' by converting it to a string and saving it
        } catch (error) {
            console.log(error); // Handle any errors
        }
    };

    const loadCards = async () => { // Load cards from AsyncStorage
        try {
            const storedCards = await AsyncStorage.getItem('cards'); // Get the stored cards
            if (storedCards) { // If there are stored cards
                setCards(JSON.parse(storedCards)); // Parse the stored cards and update the cards state
            }
        } catch (error) { // Handle any errors
            console.log(error); // Log the error
        }
    };

    useEffect(() => { // Load cards when the component mounts
        loadCards(); // Call the loadCards function
    }, []); // Empty dependency array

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Question</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter question"
                value={question}
                onChangeText={setQuestion} // Update the question state
            />

            <TextInput
                style={styles.input}
                placeholder="Enter answer"
                value={answer}
                onChangeText={setAnswer} // Update the answer state
            />

            <Button title="Add Card" onPress={handleAddCard} />

            <FlipCardComponent cards={cards} />
        </View>
    );
}