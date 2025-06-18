import { Button, Text, View } from "react-native";


export default function DashboardScreen() {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title={"Logout"} />
      <Button title={"Add Question/Answer"} />
      <Button title={"Do Flipcard"} />
    </View>
  );
}