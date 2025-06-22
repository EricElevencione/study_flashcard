import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import styles from '../assets/css/addQuestionPage';

interface Card {
    id: string;
    question: string;
    answer: string;
}

export default function add_Questions() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [cards, setCards] = useState<Card[]>([]);

    const handleAddCard = () => {
        if (question.trim() === '' || answer.trim() === '') return;

        setCards([...cards, { id: Date.now().toString(), question, answer }]);
        setQuestion('');
        setAnswer('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Question</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter question"
                value={question}
                onChangeText={setQuestion}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter answer"
                value={answer}
                onChangeText={setAnswer}
            />

            <Button title="Add Card" onPress={handleAddCard} />

            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                style={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Q: {item.question}</Text>
                        <Text style={styles.cardText}>A: {item.answer}</Text>
                    </View>
                )}
            />
        </View>
    );
}