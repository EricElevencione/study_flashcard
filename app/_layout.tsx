import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="addQuestions" />
      <Stack.Screen name="flipCard" />
    </Stack>
  );
}