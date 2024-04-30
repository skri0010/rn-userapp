import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserForm />
      <UserList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
