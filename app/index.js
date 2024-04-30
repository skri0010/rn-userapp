import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";

// import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserFormModal from "../components/UserFormModal";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      {/* <UserForm /> */}
      <UserFormModal />
      <UserList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
