import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";

// import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      {/* <UserForm /> */}
      <UserList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
