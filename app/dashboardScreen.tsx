import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from "react-native";

/**
 * DashboardScreen: This is the main screen of the app. It has a logout button and two 
 * buttons to navigate to add questions/answers and to start the flipcard activity.
 */
export default function DashboardScreen() {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title={"Logout"} />
      <Button title="Add Question/Answer" onPress={() => router.push('/add_Questions')} />
      <Button title={"Do Flipcard"} />
    </View>
  );
}

